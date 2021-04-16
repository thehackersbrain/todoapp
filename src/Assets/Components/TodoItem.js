function TodoItem(props) {
	return (
		<div className="todoitem container">
			<div className="alert alert-success" role="alert">
				<h4 className="alert-heading">{props.todos.title}</h4>
				<p>{props.todos.desc}</p>
				<hr />
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<button
								type="button"
								className="btn btn-outline-success"
							>
								Done
							</button>
						</div>
						<div className="col-sm">
							<button
								type="button"
								className="btn btn-outline-danger"
								onClick={() => props.onDelete(props.todos)}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;
