import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
	return (
		<div className="Menu">
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<b>{props.title}</b>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link"
									aria-current="page"
									to="/"
									activeClassName="active"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/about"
									activeClassName="active"
								>
									About
								</Link>
							</li>
						</ul>
						{props.searchBar ? (
							<form className="d-flex">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button
									className="btn btn-outline-light"
									type="submit"
								>
									Search
								</button>
							</form>
						) : (
							""
						)}
					</div>
				</div>
			</nav>
		</div>
	);
}

// Default value of title prop
Menu.defaultProps = {
	title: "Default Title",
	searchBar: true,
};

Menu.propTypes = {
	title: PropTypes.string,
	searchBar: PropTypes.bool,
	// searchBar: PropTypes.bool.isRequired,
};

export default Menu;
