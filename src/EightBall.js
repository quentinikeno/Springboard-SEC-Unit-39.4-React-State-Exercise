import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
	const [msg, setMsg] = useState("Think of a Question");
	const [color, setColor] = useState("black");
	return (
		<div className={`EightBall-circle ${color}`}>
			<span>{msg}</span>
		</div>
	);
};

export default EightBall;
