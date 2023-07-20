import React,{useState}from "react";

function Toggle() {
  const [isOn,setIsOn] = useState(false);
  function handleClick(){
    setIsOn((isOn)=>!isOn)
  }
  const color = isOn ? "red" : "white"
  
  return <button style = {{background : color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;

// 🚫 Is it passed as a prop?

// 🚫 Can you compute it based on any other state or props in your component?

// 🚫 Does it remain unchanged over time?