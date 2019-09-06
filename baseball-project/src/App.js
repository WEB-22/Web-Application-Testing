import React, { useState } from 'react';
import './App.css';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';

function App() {
	const [ balls, setBalls ] = useState(0);
	const [ strikes, setStrikes ] = useState(0);

	return (
		<div className="App">
			<Dashboard balls={balls} setBalls={setBalls} strikes={strikes} setStrikes={setStrikes} />
			<Display balls={balls} setBalls={setBalls} strikes={strikes} setStrikes={setStrikes} />
		</div>
	);
}

export default App;