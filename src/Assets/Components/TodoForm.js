import "../CSS/TodoForm.css";
import React, { useState } from "react";

function TodoForm(props) {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const addTodo = (e) => {
		e.preventDefault();
		if (!title || !desc) {
			alert("Fields cannot be blank. :)");
		}
		props.addTodo(title, desc);
	};

	return (
		<div className="container" style={{ fontFamily: '"Montserrat"' }}>
			<button
				type="button"
				className="addBtn btn btn-outline-primary"
				data-bs-toggle="modal"
				data-bs-target="#todoform"
			>
				<i className="bx bx-plus"></i>
			</button>
			<div
				className="modal fade"
				id="todoform"
				tabIndex={-1}
				aria-labelledby="todoformArea"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="todoformArea">
								Add Todo
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>
						<div className="modal-body">
							<div className="container">
								<form onSubmit={addTodo}>
									<div className="mb-3">
										<input
											type="text"
											className="form-control"
											id="todotitle"
											placeholder="Enter Title"
											value={title}
											onChange={(e) =>
												setTitle(e.target.value)
											}
											required
										/>
									</div>
									<div className="mb-3">
										<textarea
											className="form-control"
											id="tododesc"
											rows={3}
											placeholder="Enter Description"
											required
											value={desc}
											onChange={(e) =>
												setDesc(e.target.value)
											}
										/>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary"
											data-bs-dismiss="modal"
										>
											Close
										</button>
										<button
											type="submit"
											className="btn btn-primary"
										>
											Add Todo
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TodoForm;
