import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayok =['shakib khan', 'amir khan', 'salman khan', 'shah rukh khan','imran khan', 'jibon']
  const product=[
    {name:"Photoshop", price: '$678.45',discribtion:'this product is very usefull every country'},
    {name:"Illastretor", price: '$878.45',discribtion:'this product is very usefull every country'},
    {name:"picsArt", price:'$500.50',discribtion:'this product is very usefull every country'}
]
 const nayokStyle={
   listStyle:'none',
    color:'cyan',
 }
  return (
    <div className="App">
      <header className="App-header">
        <h3> I am header of react</h3>
          <LoadServerPost></LoadServerPost>
          <Counter></Counter>
          <Users></Users>
        <ul style={nayokStyle}>
          {
            nayok.map(nayoks => <li>{nayoks}</li>)
          }
          {
            product.map(productName => <li>{productName.name, productName.price}</li>)
          }
        </ul>
        {
         product.map(pd => <Products products={pd}></Products>)
        }
        <Products productItem={product[0]} ></Products>
        <Products productItem={product[2]} ></Products>
        <Products productItem={product[1]} ></Products>
      </header>
    </div>
  );
}
function LoadServerPost() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }) 
  return(
    <div>
      <h2>Post Count: {posts.length}</h2>
      
      {
        posts.map(post => <li>{post.title}</li>)
      }
    </div>
  )
}




// Daynamic data load to server
function Users() {
  const [users, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  return(
    
    <div>
      <h3>Count Server users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

// useState use increase and decrease
function Counter() {
  const [count, setCount] = useState(20);
  const handleIncrease= () => setCount(count + 1);
  const handleDecrease= () => setCount(count - 1);
  return (
    <div>
      <h1> Count:{count}</h1>
      <button onClick={handleIncrease}>Incress</button><br />
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

// how to work react . single component use to multi component build.
function Products(props) {
 const productStyle={
    border:'1px solid #ddd',
    borderRadius:'5px',
    width:'400px',
    float:"left",
    margin:'10px',
    padding:'10px',
    background:'#ddd',
    color:'#ff5200'
  }
  const {name, price, discribtion} = {name:"Photoshop", price: '$678.45',discribtion:'this product hridoy is very usefull every country'};
  
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <p>{discribtion}</p>
      {/* <h3>{props.name}</h3>
      <h2>{props.price} </h2>
      <p>{props.discribtion}</p> */}
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
    const personStyle ={
      color:'red',
      border:'2px solid cyan',
      margin:'10px',
      width:"300px"
    };

  return(
    <div style={personStyle} >
      <h3>{props.name}</h3>
      <p>{props.hobby} </p>
    </div>
  )
}
export default App;
