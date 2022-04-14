import React from "react";

export const Jumbotron = () => {
	return (
		<div className="container py-5">
			<h1 className="display-5 fw-bold">A Warm Welcome</h1>
			<p className="col-md-8 fs-5 fw-light">
				In faucibus est ac orci efficitur sagittis. Sed non mauris
				justo. Vivamus nec rutrum justo. Vestibulum malesuada cursus
				condimentum. Integer sed aliquam odio.
			</p>

			<button className="btn-primary btn-lg" type="button">
				Call to Action
			</button>
		</div>
	);
};
export default Jumbotron;
