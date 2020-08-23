import React from 'react';
import './App.css';

function App() {

const products = [{name: "Photoshop", price: "$200"},
                {name: "Illustrator",price: "$120" },
                {name: "Illustrator",price: "$120" }

]
console.log(products)
  return (
    <div className="App">

        <h1>My first React App</h1>
    <Products name={products[0].name} heroin={products[0].price}></Products>
    <Products name={products[1].name} heroin={products[1].price}></Products>
    <Products name ={products[2].price}></Products>
    </div>
  );
}
function Products(props){
  const style = {
    border: "1px solid gray",
    padding: "12px",
    color: "black",
    margin: "10px",
    height: "300px",
    width: "300px",
    float: "left"
  }
  console.log(props)
  return (
 
    <div style={style}>
      <h3>Name: {props.name}</h3>
  <h1>{props.heroin}</h1>
      <button>Buy Now</button>
    </div>
  )

}

export default App;
