import React from 'react';

const Display = ({ balls, setBalls, strikes, setStrikes }) => {
	return (
		<div>
			<h1>Balls: {balls}</h1>
			<h1>Strikes: {strikes}</h1>
		</div>
	);
};

export default Display;