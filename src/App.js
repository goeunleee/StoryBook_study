import logo from "./logo.svg";
import "./App.css";
import { Button } from "./stories/Button";
import { Warning } from "./stories/Button.stories";
function App() {
	return (
		<div className="App">
			<Button label={"#34"} />
			{/* <Warning /> */}
		</div>
	);
}

export default App;
