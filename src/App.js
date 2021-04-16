import "./App.css";
import Navbar from "./Assets/Components/Navbar";
import Todos from "./Assets/Components/Todos";
import Footer from "./Assets/Components/Footer";
import TodoForm from "./Assets/Components/TodoForm";
import React, { useState, useEffect } from "react";

function App() {
	let initTodo;
	if (localStorage.getItem("todos") === null) {
		initTodo = [];
	} else {
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}

	const onDelete = (todo) => {
		setTodos(
			todos.filter((e) => {
				return e !== todo;
			})
		);
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const addTodo = (title, desc) => {
		let sno = todos.length + 1;
		const todoValue = {
			sno: sno,
			title: title,
			desc: desc,
		};
		setTodos([...todos, todoValue]);
	};

	const [todos, setTodos] = useState(initTodo);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<div className="App">
			<Navbar title="Todo App" />
			<Todos todos={todos} onDelete={onDelete} />
			<Footer />
			<TodoForm addTodo={addTodo} />
		</div>
	);
}

export default App;
