import React from "react";

type CoreStat = { name: string; score: number; modifier: number; save: number };

export default function CoreStat({ name, score, modifier, save }: CoreStat) {
	return (
		<div className="character-traits">
			<div className="trait-name">{name}</div>
			<div className="detail-blocks">
				<div className="detail-block">
					<div className="detail-block_title">Score</div>
					<div className="detail-block_score">{score}</div>
				</div>
				<div className="detail-block">
					<div className="detail-block_title">Modifier</div>
					<div className="detail-block_score">{modifier}</div>
				</div>
				<div className="detail-block">
					<div className="detail-block_title">Save</div>
					<div className="detail-block_score">{save}</div>
				</div>
			</div>
		</div>
	);
}
