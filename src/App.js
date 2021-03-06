import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
const name = ["mamun", "sagor", "alim", "masumAli", "maruf hossain"];
const products = [{name: "Photoshop", price: "$200"},
                  {name: "Illustrator",price: "$130" },
                  {name: "adobe Premier",price: "$120" },
                  {name: "Rush Pro",price: "$250" }

]


  return (
    <div className="App">
      <ul>
        {name.map(nam => <li>{nam}</li>)}
      </ul>
        <h1>My first React App</h1>
      <ul>
      {products.map(pro => <Products product={pro.name} price = {pro.price}></Products> )}
      <Counter></Counter>
      <Users></Users>
    

      </ul>


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
      <h3>Name: {props.product}</h3>
      <h1>Price{props.price}</h1>
      <button>Buy Now</button>
    </div>
  )

}

function Counter(){
 
  const [count, setCount] = useState(0)


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={()=> setCount(count +1 )}>Increase</button>
    </div>
  )
}


function Users(){

  const [users, setUsers] = useState([]);
 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
})
  return (
    <div>
      <h2>Dynamic Data:{users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
