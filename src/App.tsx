import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<div id="page-container">
				<Routes>
					<Route path="/" element={<Projects />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
