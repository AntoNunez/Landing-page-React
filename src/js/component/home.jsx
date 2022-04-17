import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component

const Home = () => {
	return (
		<>
			<NavBar
				titleNav="Star Bootstrap"
				linkNav="Home"
				linkNav2="About"
				linkNav3="Services"
				linkNav4="Contact"
			/>
			<Jumbotron
				titleJumbo="A Warm Welcome!"
				textJumbo="In faucibus est ac orci efficitur sagittis. Sed non mauris justo. Vivamus nec rutrum justo. Vestibulum malesuada cursuscondimentum. Integer sed aliquam odio"
				textButton="Call to Action"
			/>
			<Cards />
			<Footer pie="Copyright © Your Website 2022" />
		</>
	);
};

export default Home;
