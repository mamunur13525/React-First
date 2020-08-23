import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var name = {
    first : "mamun",
    age : 12,
    school : "parulia ss high school"
  }
  var color = {
    color: "red",
    backgroundColor: "yellow",
    fontWeight: "bold",
    color:"black"
  }
  return (
    <div className="App">

        <p>HIs name is{" "+name.age}</p>
        <Person name="rubel hossain" age = "12"></Person>
        <Person name="alamin hossain" age = "43"></Person>
        <Person name="mamun hossain" age = "23"></Person>
       
       
     
    </div>
  );
}

function Person(props){
    

  return (<div>
          <h1>HI! There.?</h1>
         
          <h1>name is :{props.name}</h1>
          <h2>His Age is :{props.age}</h2>
  </div>)
}
export default App;
