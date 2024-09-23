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
    <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" price={10} photo="pizzas/spinaci.jpg" />
    <Pizza name="Focaccia" ingredients="Bread with italian olive oil and rosemary" price={12} photo="pizzas/focaccia.jpg" />

  </main>
}

function Footer() {
  return <footer className='footer'>We are currently Open!</footer>
}



function Pizza(props) {
  return <div className='pizza'>
    <img src={props.photo} alt={props.photo} />
    <div>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price + 1}</span>
    </div>
  </div>
}

export default App;
