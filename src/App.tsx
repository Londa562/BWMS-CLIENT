import { BrowserRouter as Router } from "react-router-dom";
import MainApp from "./components/MainApp";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-50">
				<MainApp />
			</div>
		</Router>
	);
}

export default App;
