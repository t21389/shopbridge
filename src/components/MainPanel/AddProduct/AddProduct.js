import React, { useEffect, useState } from "react";
import { addProduct } from "./../../../redux/action/addProduct";
import { connect } from "react-redux";
import "./AddProduct.scss";

const AddProduct = (props) => {
	const [isValid, setIsValid] = useState(true);
	const [productObj, setProductObj] = useState({
		id: "",
		brandname: "",
		category: "electronics",
		code: "",
		description: "",
		id: "",
		price: "",
		quantity: "",
	});

	const resetForm = () => {
		let newProductObj = {
			id: "",
			brandname: "",
			category: "electronics",
			code: "",
			description: "",
			id: "",
			price: "",
			quantity: "",
		};
		setProductObj(newProductObj);
	};

	const validateForm = () => {
		if (
			productObj.brandname.length > 0 &&
			productObj.category.length > 0 &&
			productObj.code.length > 0 &&
			productObj.description.length > 0 &&
			productObj.price.length > 0 &&
			productObj.quantity.length > 0
		) {
			setIsValid(true);
			return true;
		}
		setIsValid(false);
		return false;
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (validateForm()) {
			let productToAdd = productObj;
			productToAdd.id = props.products[props.products.length - 1].id + 1;
			props.addProduct(productToAdd);
			resetForm();
		}
	};

	const onChangeHandler = (e, action) => {
		setProductObj((prev) => ({
			...prev,
			[action]: e.target.value,
		}));
	};

	return (
		<form className="add-product-form" onSubmit={formSubmitHandler}>
			<div className="form-header">
				<h2>Add Product</h2>
			</div>
			<div className="rows product-type">
				<label className=" label-product-type"> Product Category*</label>
				<div className=" select-product-type">
					<select
						name="type"
						id="type"
						value={productObj.category}
						onChange={(e) => onChangeHandler(e, "category")}
					>
						<option value="electronics">Electronics</option>
						<option value="beauty">Beauty</option>
						<option value="clothing">Clothing</option>
						<option value="articles">Articles</option>
					</select>
				</div>
			</div>
			<div className="rows">
				<div className="col-50">
					<label className=" label-product-type">Brand Name*</label>
					<input
						type="text"
						value={productObj.brandname}
						onChange={(e) => onChangeHandler(e, "brandname")}
					/>
					{!isValid && productObj.brandname.length === 0 ? (
						<div className="errorMsg">Please Provide BrandName!</div>
					) : null}
				</div>
				<div className="col-50">
					<label className=" label-product-type">Code*</label>
					<input
						type="text"
						value={productObj.code}
						onChange={(e) => onChangeHandler(e, "code")}
					/>
					{!isValid && productObj.code.length === 0 ? (
						<div className="errorMsg">Please Provide Code!</div>
					) : null}
				</div>
			</div>
			<div className="rows">
				<div className="col-50">
					<label className=" label-product-type">Price*</label>
					<input
						type="number"
						value={productObj.price}
						onChange={(e) => onChangeHandler(e, "price")}
					/>
					{!isValid && productObj.price.length === 0 ? (
						<div className="errorMsg">Please Provide Price!</div>
					) : null}
				</div>
				<div className="col-50">
					<label className=" label-product-type">Quantity*</label>
					<input
						type="number"
						value={productObj.quantity}
						onChange={(e) => onChangeHandler(e, "quantity")}
					/>
					{!isValid && productObj.quantity.length === 0 ? (
						<div className="errorMsg">Please Provide Quantity!</div>
					) : null}
				</div>
			</div>

			<div className="rows">
				<div className="col-100">
					<label className=" label-product-type">
						Description/Product Details*
					</label>
					<textarea
						rows="4"
						value={productObj.description}
						onChange={(e) => onChangeHandler(e, "description")}
					/>
					{!isValid && productObj.description.length === 0 ? (
						<div className="errorMsg">Please Provide Description!</div>
					) : null}
				</div>
			</div>
			<input type="submit" value="Submit" />
		</form>
	);
};

const mapStateToProps = (state) => ({
	products: state.products.products,
});

export default connect(mapStateToProps, { addProduct })(AddProduct);
