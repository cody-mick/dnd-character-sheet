import React from "react";
import CoreStat from "./CoreStat";
import CharacterStat from "./CharacterStat";

export default function CharacterDetail() {
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
				<CoreStat name={"Strength"} score={10} modifier={10} save={1} />
				<CoreStat
					name={"Intelligence"}
					score={10}
					modifier={10}
					save={1}
				/>
				<CoreStat
					name={"Dexterity"}
					score={10}
					modifier={10}
					save={1}
				/>
				<CoreStat name={"Wisdom"} score={10} modifier={10} save={1} />
				<CoreStat
					name={"Constitution"}
					score={10}
					modifier={10}
					save={1}
				/>
				<CoreStat name={"Charisma"} score={10} modifier={10} save={1} />
			</div>
		</div>
	);
}
