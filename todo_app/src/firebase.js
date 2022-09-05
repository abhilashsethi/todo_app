import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDYKD24JSj9SykOnFi5oA1aaqYDD9ysBIE",
	authDomain: "react-contact-4d7a1.firebaseapp.com",
	databaseURL: "https://react-contact-4d7a1-default-rtdb.firebaseio.com",
	projectId: "react-contact-4d7a1",
	storageBucket: "react-contact-4d7a1.appspot.com",
	messagingSenderId: "688519965407",
	appId: "1:688519965407:web:78030c9838bf8b692b976a",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
