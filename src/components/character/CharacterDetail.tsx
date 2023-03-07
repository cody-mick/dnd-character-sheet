import React from "react";
import CoreStat from "./CoreStat";

export default function CharacterDetail() {
	return (
		<div>
			<div className="name-level">
				<div className="name">Name: characterName</div>
				<div className="level">Level: characterLevel</div>
			</div>
			<div className="stats">
				<div className="health">Health: characterHealth</div>
				<div className="initiative">
					Initiative: characterInitiative
				</div>
				<div className="speed">Speed: characterSpeed</div>
				<div className="hitDice">Hit Dice: characterHitDice</div>
				<div className="armor-class">
					Armor Class: characterArmorClass
				</div>
				<div className="proficiency">
					Proficiency: characterProficiency
				</div>
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
