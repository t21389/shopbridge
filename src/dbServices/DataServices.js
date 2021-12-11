import firebase from "./firebaseConfig";
const db = firebase.ref("/data");

const DataServices = () => {
	return {
		getAll: function () {
			return db;
		},

		create: function (value) {
			return db.child(value.id).update(value);
		},

		updateProduct: function (key, value) {
			return db.child(key).update(value);
		},

		updateAll: function (key, value) {
			return db.child(key).update(value);
		},

		deleteProduct: function (key) {
			return db.child(key).remove();
		},

		deleteAll: function () {
			return db.remove();
		},
	};
};

export default DataServices;
