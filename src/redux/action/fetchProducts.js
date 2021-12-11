import DataServices from "../../dbServices/DataServices";

export const fetchProducts = () => (dispatch) => {
	(async () => {
		const response = await fetch(
			"https://shopbridgedb-default-rtdb.firebaseio.com/data.json"
		);
		const responseData = await response.json();
		let newData = [];
		let newArr = [];

		if (responseData != null && responseData.length) {
			newArr = responseData.filter((item) => {
				if (item) {
					return item;
				}
			});
		} else if (responseData != null && responseData instanceof Object) {
			Object.keys(responseData).forEach((item) => {
				newArr.push(responseData[item]);
			});
		} else {
			newArr = responseData ? responseData : [];
		}
		console.log(newArr);

		return dispatch({
			type: "view",
			payload: newArr,
		});
	})();
};
