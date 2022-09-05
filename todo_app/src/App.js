import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import { db } from "./firebase";
// import firebase from "firebase";
import firebase from "firebase/compat/app";

//live link----  https://react-contact-4d7a1.web.app/

function App() {
	const [todos, setTodos] = useState([]);

	const [input, setInput] = useState("");

	useEffect(() => {
		db.collection("todos")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				// console.log(snapshot.docs.map((doc) => doc.data()));
				setTodos(snapshot.docs.map((doc) => doc.data().todo));
			});
	}, []);

	const addTodo = (e) => {
		e.preventDefault();
		// console.log("send addTodo");

		db.collection("todos").add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setTodos([...todos, input]);
		setInput("");
	};

	return (
		<div className="App">
			<h1>Hello world</h1>
			<form action="">
				<FormControl>
					<InputLabel>Write a Todo</InputLabel>
					<Input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</FormControl>
				<Button
					disabled={!input}
					variant="contained"
					color="primary"
					type="submit"
					onClick={addTodo}
				>
					Add Todos
				</Button>
				{/* <button type="submit" onClick={addTodo}>
					Add Todos
				</button> */}
			</form>

			<ul>
				{todos.map((todo, index) => {
					return <Todo text={todo} key={index} />;
				})}
			</ul>
		</div>
	);
}

export default App;
