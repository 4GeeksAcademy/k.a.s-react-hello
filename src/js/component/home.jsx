import React from "react";
import {Navbar} from "./Navbar";
import {CardRow} from "./CardRow";
import {Card} from "./Card";
import {Jumbotron} from "./Jumbotron";
import {Footer} from "./Footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
	
			<Navbar></Navbar>
			<div className= "max-w-screen-xl m-auto">
			<Jumbotron></Jumbotron>
				<CardRow>
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</CardRow>	
			</div>
			<Footer></Footer>
		</>
	);
};

export default Home;
