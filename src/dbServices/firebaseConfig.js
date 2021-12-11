import firebase from "firebase";

let config = {
	databaseURL:
		"https://shopbridgedb-default-rtdb.firebaseio.com/",
	projectId: "shopbridgedb",
	//   appId: "596834802307",
	//   apiKey: "AIzaSyAHUMuI4WbQ7bZcUcYDRgNYvzqiw2jm5z0",
	//   authDomain: "bezkoder-firebase.firebaseapp.com",
	//   storageBucket: "bezkoder-firebase.appspot.com",
	//   messagingSenderId: "xxx",
};

firebase.initializeApp(config);

export default firebase.database();
