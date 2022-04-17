import React from "react";

import Card from "./card1.jsx";

const Cards = () => {
	return (
		<div className="container">
			<div className="row mb-1">
				<>
					<div className="col-12 col-sm-3">
						<Card
							imgUrl="https://picsum.photos/id/867/200/300"
							title="Card title"
							text="Cras sit amet viverra nibh. In vitae sem ut
								       lorem porttitor congue eget vitae elit. Aliquam
								       luctus ex at nunc dictum."
							buttonUrl="https://picsum.photos/id/867/200/300"
							buttonText="Find Out More!"
						/>
					</div>

					<div className="col-12 col-sm-3">
						<Card
							imgUrl="https://picsum.photos/id/969/200/300"
							title="Card title"
							text="Cras sit amet viverra nibh. In vitae sem ut
							           lorem porttitor congue eget vitae elit. Aliquam
							           luctus ex at nunc dictum."
							buttonUrl="https://picsum.photos/id/867/200/300"
							buttonText="Find Out More!"
						/>
					</div>

					<div className="col-12 col-sm-3">
						<Card
							imgUrl="https://picsum.photos/id/945/200/300"
							title="Card title"
							text="Cras sit amet viverra nibh. In vitae sem ut
							           lorem porttitor congue eget vitae elit. Aliquam
							           luctus ex at nunc dictum."
							buttonUrl="https://picsum.photos/id/867/200/300"
							buttonText="Find Out More!"
						/>
					</div>

					<div className="col-12 col-sm-3">
						<Card
							imgUrl="https://picsum.photos/id/390/200/300"
							title="Card title"
							text="Cras sit amet viverra nibh. In vitae sem ut
							           lorem porttitor congue eget vitae elit. Aliquam
							           luctus ex at nunc dictum."
							buttonUrl="https://picsum.photos/id/867/200/300"
							buttonText="Find Out More!"
						/>
					</div>
				</>
			</div>
		</div>
	);
};
export default Cards;
