import DataServices from "../../dbServices/DataServices";

export const addProduct = (productToAdd) => (dispatch) => {
	console.log(productToAdd);

	DataServices()
		.create(productToAdd)
		.then(() => {
			console.log("entry added successfully!");
			alert("Product added successfully");
			return dispatch({
				type: "create",
				payload: productToAdd,
			});
		})
		.catch((e) => {
			console.log(e);
		});
};
