import DataServices from "../../dbServices/DataServices";

export const deleteProducts = (productToDelete,index) => (dispatch) => {
	console.log(productToDelete);

	DataServices()
		.deleteProduct(productToDelete.id)
		.then(() => {
			console.log("deleted entry successfully!");
			alert("Product deleted successfully");
			return dispatch({
				type: "delete",
				payload: index,
			});
			
		})
		.catch((e) => {
			console.log(e);
		});
};
