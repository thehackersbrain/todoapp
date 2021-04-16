import "./App.css";
import Navbar from "./Assets/Components/Navbar";
import Todos from "./Assets/Components/Todos";
import Footer from "./Assets/Components/Footer";
import TodoForm from "./Assets/Components/TodoForm";
import React, { useState } from "react";

function App() {
	const onDelete = (todo) => {
		setTodos(
			todos.filter((e) => {
				return e !== todo;
			})
		);
	};

	const [todos, setTodos] = useState([
		{
			sno: 1,
			title: "Go to Market.",
			desc: "You need to go to the market to get this job done.",
		},
		{
			sno: 2,
			title: "Learn Hacking",
			desc: "You need to learn Hacking Right Now!!",
		},
		{
			sno: 3,
			title: "Create a Website",
			desc: "You need to have or create a website Right Now !!",
		},
	]);

	return (
		<div className="App">
			<Navbar title="Todo App" />
			<Todos todos={todos} onDelete={onDelete} />
			<Footer />
			<TodoForm />
		</div>
	);
}

export default App;
