import { TextField } from "@mui/material";
import React from "react";

type CharacterStat = { name: string; score: number | string };

export default function CharacterStat({ name, score }: CharacterStat) {
	return (
		<div className="character-stat">
			<div className="stat-name">{name}</div>
			<TextField
				variant="outlined"
				size="small"
				value={score}
				style={{
					textAlign: "center",
					width: "65px",
				}}
			/>
		</div>
	);
}
