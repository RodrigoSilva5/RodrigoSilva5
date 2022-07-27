// 1) import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root")

// 3) tell React to take control of that element 
const root = ReactDOM.createRoot(el)
// 4) create a component

function App(){
    return (
     <input 
     autoFocus
     maxLength={10}
     spellCheck
    />)
}

// 5) show the component on the screen 

root.render(<App />)