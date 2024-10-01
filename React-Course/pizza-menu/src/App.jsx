import React from 'react';
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


const App = () => {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}
function Header() {
  const style = {};
  return <header className='header'>
    <h1 style={style} >Fast React Pizza Co.</h1>
  </header>
}

function Menu() {
  return <main className='menu'>
    <h2>Our Menu</h2>
    <ul className='pizzas'>

      {
        pizzaData.map((pizza, index) => <Pizza key={pizza.name} pizzaObj={pizza} />)
      }
    </ul>

  </main>
}

function Footer() {
  const hours = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;

  return <footer className='footer'>
    {isOpen ? (
      <div className='order'>
        <p>
          We are open untill {closeHour}:00. Come visit us or order online
        </p>
        <button className='btn'>Order</button>
      </div>) : <p>Sorry We are Closed</p>}
  </footer>
}



function Pizza(props) {
  return <li className='pizza'>
    <img src={props.pizzaObj.photoName} alt={props.pizzaObj.photo} />
    <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price}</span>
    </div>
  </li>
}

export default App;
