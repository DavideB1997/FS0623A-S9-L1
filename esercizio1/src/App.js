import "./App.css";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import logo from "./logo.svg";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Part1
					label='Click Me!'
					name='ehmmm'
				/>
				<Part2
					label='Click Me!'
					name='Tyler Durden'
				/>
			</header>
		</div>
	);
}

export default App;
