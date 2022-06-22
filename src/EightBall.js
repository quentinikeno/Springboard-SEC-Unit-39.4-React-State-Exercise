import React, { useState } from "react";
import pickRandom from "./helpers";
import "./EightBall.css";

const EightBall = ({ answers }) => {
	const [msg, setMsg] = useState("Think of a Question");
	const [color, setColor] = useState("black");
	const setMsgAndColor = () => {
		const { msg, color } = pickRandom(answers);
		setMsg(msg);
		setColor(color);
	};
	const reset = () => {
		setMsg("Think of a Question");
		setColor("black");
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
		</div>
	);
};

export default EightBall;
