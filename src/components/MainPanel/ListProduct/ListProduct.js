import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../../redux/action/fetchProducts";
import {
	updateProducts,
	updateAll,
} from "../../../redux/action/updateProducts";
import { deleteProducts } from "../../../redux/action/deleteProducts";
import DataTable from "react-data-table-component";
import { Columns } from "./TableColumns/TableColumns";
import "./ListProduct.scss";

const ListProduct = (props) => {
	const [products, setProducts] = useState([]);
	const [showLoader, setShowLoader] = useState(true);

	const setProductList = (row, editable) => {
		let newProducts = products.map((item) => {
			if (item.id === row.id) {
				item["editable"] = editable;
			}
			return item;
		});

		setProducts(newProducts);
	};
	const onEdit = (row) => {
		setProductList(row, true);
	};
	const onDelete = (row, index) => {
		props.deleteProducts(row,index);
		let newArr = products.filter((item) => {
			return item.id !== row.id;
		});
		setProductList(row, false);
		setProducts(newArr);
		props.updateAll(newArr);
	};
	const onSave = (row) => {
		delete row.editable;
		props.updateProducts(row);
		setProductList(row, false);
	};
	const onCancel = (row) => {
		setProductList(row, false);
		let newArr = JSON.stringify(props.products);
		setProducts(JSON.parse(newArr));
	};

	const onChangeHandler = (e, type, index) => {
		let newArr = [...products];
		newArr[index][type] = e.target.value;
		setProducts(newArr);
	};
	const mappedColumns = Columns({
		onEdit,
		onSave,
		onCancel,
		onDelete,
		onChangeHandler,
	});

	useEffect(() => {
		props.fetchProducts();
	}, []);

	useEffect(() => {
		setShowLoader(false);
	}, [products]);

	useEffect(() => {
		let newArr = JSON.stringify(props.products);
		setProducts(JSON.parse(newArr));
	}, [props.products]);

	return (
		<div className="list-product">
			<DataTable
				columns={mappedColumns}
				data={products}
				pagination={true}
				progressPending={showLoader}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	products: state.products.products,
});

// export default ListProduct;
export default connect(mapStateToProps, {
	fetchProducts,
	updateProducts,
	deleteProducts,
	updateAll,
})(ListProduct);
