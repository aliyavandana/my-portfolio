import React from "react";
import IntroImg from "../../Images/intro.jpg";
import "./Intro.scss";

function Intro() {
	return (
		<div className="Intro">
      			<img className="IntroImg " src={IntroImg} alt="codingwomen"></img>
			<div className="IntroText">
      <div className="bubbleAnimation"></div>
      <div className="bubbleAnimationTwo"></div>
				<h1 className="IntroTextHeader">
					Hello,
					<br />
					I'm
					<br />
					Aliya Vandana.
				</h1>
				<h2 className="IntroTextDescription">I'm a Frontend Developer</h2>

			</div>
		</div>
	);
}

export default Intro;
