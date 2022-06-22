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
	return (
		<div className={`EightBall-circle ${color}`} onClick={setMsgAndColor}>
			<span>{msg}</span>
		</div>
	);
};

export default EightBall;
