import "../CSS/TodoForm.css";

function TodoForm() {
	return (
		<div className="container" style={{ fontFamily: '"Montserrat"' }}>
			<button
				type="button"
				className="addBtn btn btn-outline-primary"
				data-bs-toggle="modal"
				data-bs-target="#todoform"
			>
				<i class="bx bx-plus"></i>
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
								<form method="GET">
									<div className="mb-3">
										<input
											type="text"
											className="form-control"
											id="todotitle"
											placeholder="Enter Title"
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
											defaultValue={""}
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
