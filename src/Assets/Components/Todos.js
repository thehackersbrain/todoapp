import TodoItem from "./TodoItem";

function Todos(props) {
	return (
		<div className="todoArea">
			<h2 className="my-4">Todo List Items</h2>
			{props.todos.length === 0
				? "Nothing to Show, You're All Done..."
				: props.todos.map((todo) => {
						return (
							<TodoItem
								todos={todo}
								key={todo.sno}
								onDelete={props.onDelete}
							/>
						);
				  })}
		</div>
	);
}

export default Todos;
