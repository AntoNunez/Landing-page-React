import React from "react";
import PropType from "prop-types";

const NavBar = (props) => {
	return (
		<nav className="navbar navbar-expand-md navbar bg-black">
			<div className="container">
				<a className="navbar-brand text-white" href="#">
					{props.titleNav}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="#">
								{props.linkNav}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{props.linkNav2}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{props.linkNav3}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{props.linkNav4}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	titleNav: PropType.string,
	linkNav: PropType.string,
	linkNav2: PropType.string,
	linkNav3: PropType.string,
	linkNav4: PropType.string,
};
export default NavBar;
