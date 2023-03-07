import React from "react";

type CharacterStat = { name: string; score: number | string };

export default function CharacterStat({ name, score }: CharacterStat) {
	return (
		<div className="character-stat">
			<div className="stat-name">{name}</div>
			<div className="stat-score">{score}</div>
		</div>
	);
}
