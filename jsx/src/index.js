//import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a React Components
const App = function () {
	const buttonText = { text: "Click me" };
	const labelText = "Enter Name";
	return (
		<div>
			<label className="label" htmlFor="name">
				{labelText}
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: "blue", color: "white" }}>
				{buttonText.text}
			</button>
		</div>
	);
};

//Takw the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
