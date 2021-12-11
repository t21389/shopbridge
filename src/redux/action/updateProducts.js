import DataServices from "../../dbServices/DataServices";

export const updateProducts = (productToUpdate) => (dispatch) => {
	console.log(productToUpdate);

	DataServices()
		.updateProduct(productToUpdate.id, productToUpdate)
		.then(() => {
			console.log("updated entry successfully!");
			alert("Product updated successfully");
			return dispatch({
				type: "update",
				payload: productToUpdate,
			});
		})
		.catch((e) => {
			console.log(e);
		});
};
export const updateAll = (productsToUpdate) => (dispatch) => {
	console.log(productsToUpdate);

	DataServices()
		.getAll()
		.once("value", function (snapshot) {
			snapshot.forEach(function (child) {
				child.ref.update({
					open: false,
				});
			});
		});
};

// const onDataChange = (productsSnapshot) => {
//     console.log('prdocutss', productsSnapshot);

//     productsSnapshot.forEach((item) => {
//         let key = item.key;
//         let data = item.val();
//         console.log('key,data', key,data);

//     })
// }

// DataServices().getAll().on("value", onDataChange);
