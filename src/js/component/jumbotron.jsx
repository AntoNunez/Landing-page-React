import React from "react";
import PropType from "prop-types";

const Jumbotron = (props) => {
	return (
		<div className="container py-5 my-3 bg-light">
			<h1 className="display-5 fs-40 fw-light ms-4">
				{props.titleJumbo}
			</h1>
			<p className="col-md-8 fs-5 fw-light ms-4">{props.textJumbo}</p>

			<button className="btn-primary btn-lg ms-4" type="button">
				{props.textButton}
			</button>
		</div>
	);
};

Jumbotron.propTypes = {
	titleJumbo: PropType.string,
	textJumbo: PropType.string,
	textButton: PropType.string,
};
export default Jumbotron;
