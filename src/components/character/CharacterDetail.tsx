import React from "react";
import CoreStat from "./CoreStat";
import CharacterStat from "./CharacterStat";

export default function CharacterDetail() {
	const testCharacterStats = [
		{
			trait: "Strength",
			detail: {
				score: 10,
				modifier: 10,
				save: 1,
			},
		},
		{
			trait: "Intelligence",
			detail: {
				score: 8,
				modifier: 10,
				save: 1,
			},
		},
		{
			trait: "Dexterity",
			detail: {
				score: 9,
				modifier: 10,
				save: 1,
			},
		},
		{
			trait: "Wisdom",
			detail: {
				score: 14,
				modifier: 10,
				save: 1,
			},
		},
		{
			trait: "Constitution",
			detail: {
				score: 3,
				modifier: 10,
				save: 1,
			},
		},
		{
			trait: "Charisma",
			detail: {
				score: 12,
				modifier: 10,
				save: 1,
			},
		},
	];

	return (
		<div className="character-detail">
			<div className="name-level">
				<div className="character-name">
					Name: The Wizard of Wiggleshire
				</div>
				<div className="character-level">Level: 1</div>
			</div>
			<div className="stats">
				<CharacterStat name={"Initiative"} score={0} />
				<CharacterStat name={"Health"} score={10} />
				<CharacterStat name={"Speed"} score={30} />
				<CharacterStat name={"Hit Dice"} score={"1d8"} />
				<CharacterStat name={"Armor Class"} score={10} />
				<CharacterStat name={"Proficiency"} score={2} />
			</div>
			<div className="traits">
				{testCharacterStats.map((stat) => (
					<CoreStat
						name={stat.trait}
						score={stat.detail.score}
						modifier={stat.detail.modifier}
						save={stat.detail.save}
					/>
				))}
			</div>
		</div>
	);
}
