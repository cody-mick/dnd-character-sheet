import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import CharacterDetail from "./components/character/CharacterDetail";

function App() {
	return (
		<div className="App">
			<CharacterDetail />
		</div>
	);
}

export default App;
