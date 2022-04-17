import React from "react";
import PropType from "prop-types";

const Footer = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar bg-dark d-flex justify-content-center">
			<div className="container2 footer ">
				<a
					className="navbar-brand text-white fs-6 text fw-light"
					href="#">
					{props.pie}
				</a>
			</div>
		</nav>
	);
};

Footer.propTypes = {
	pie: PropType.string,
};

export default Footer;
