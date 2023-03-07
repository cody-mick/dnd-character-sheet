import React from "react";

type CoreStat = { name: string; score: number; modifier: number; save: number };

export default function CoreStat({ name, score, modifier, save }: CoreStat) {
	return (
		<div className="character-traits">
			<div className="name">Name: {name}</div>
			<div className="score">Score: {score}</div>
			<div className="modifier">Modifier: {modifier}</div>
			<div className="save">Save: {save}</div>
		</div>
	);
}
