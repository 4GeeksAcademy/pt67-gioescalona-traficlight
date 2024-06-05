import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [lightRed, setLightRed] = useState("shine-lg-lg");
	const [lightYellow, setLightYellow] = useState("shine-lg");
	const [lightGreen, setLightGreen] = useState("shine-lg");

	function switchLightRed() {
		
		setLightRed("shine-lg")
		setLightYellow("")
		setLightGreen("")
	};

	function switchLightYellow() {
		

		setLightRed("")
		setLightYellow("shine-lg")
		setLightGreen("")
	};

	function switchLightGreen() {
		

		setLightRed("")
		setLightYellow("")
		setLightGreen("shine-lg")
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="trafficLight d-grid gap-2">
				<button className={`btn btn-danger rounded-circle  ${lightRed}`} onClick={switchLightRed}></button>
				<button className={`btn btn-warning rounded-circle ${lightYellow}`} onClick={switchLightYellow}></button>
				<button className={`btn btn-success rounded-circle ${lightGreen}`} onClick={switchLightGreen}></button>
				
			</div>
			<div className="poste"></div>
			<div className="poste1"></div>


			
		</div>
		
	);
};

export default Home;
