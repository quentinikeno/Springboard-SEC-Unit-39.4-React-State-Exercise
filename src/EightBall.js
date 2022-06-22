import React, { useState } from "react";
import pickRandom from "./helpers";
import "./EightBall.css";

const EightBall = ({ answers }) => {
	const [msg, setMsg] = useState("Think of a Question");
	const [color, setColor] = useState("black");
	const [greenCount, setGreenCount] = useState(0);
	const [redCount, setRedCount] = useState(0);
	const [goldenRodCount, setGoldenRodCount] = useState(0);
	const setMsgAndColor = () => {
		const { msg, color } = pickRandom(answers);
		setMsg(msg);
		setColor(color);
		if (color === "green") {
			setGreenCount(greenCount + 1);
		} else if (color === "red") {
			setRedCount(redCount + 1);
		} else {
			setGoldenRodCount(goldenRodCount + 1);
		}
	};
	const reset = () => {
		setMsg("Think of a Question");
		setColor("black");
		setGreenCount(0);
		setRedCount(0);
		setGoldenRodCount(0);
	};
	return (
		<div>
			<div
				className={`EightBall-circle ${color}`}
				onClick={setMsgAndColor}
			>
				<span>{msg}</span>
			</div>
			<div className="EightBall-reset-div">
				<button id={"EightBall-reset-button"} onClick={reset}>
					Reset
				</button>
			</div>
			<div className="EightBall-color-counter-div">
				<span className="EightBall-green-text">
					Green: {greenCount}
				</span>
				<span className="EightBall-red-text">Red: {redCount}</span>
				<span className="EightBall-goldenrod-text">
					Goldenrod: {goldenRodCount}
				</span>
			</div>
		</div>
	);
};

export default EightBall;
