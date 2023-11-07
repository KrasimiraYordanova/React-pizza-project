import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

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
  

function App() {
    return (
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    );
}

function Header() {
    return <header className="header"><h1 style={{color:'inherit', fontSize: "3rem"}}>Reactive pizza Co.</h1></header>
}

function Menu() {
  const pizzas = pizzaData;
  const pizzasQty = pizzas.length;
    return (
      <main>
        <section className="menu">
            <h2>Our menu</h2>

          {/* when using short cercuting our condition should always evlutate to true or false, cannot have an actual value */}
            {pizzasQty > 0 && (<ul className="pizzas">
              {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)}
            </ul>)}
            

            {/* {<div>
                <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photoName="pizzas/spinaci.jpg" price={11} />
                <Pizza name="Pizza Funghi" ingredients="Tomato, mushrooms" photoName="pizzas/funghi.jpg" price={12} />
            </div>} */}
        </section>
      </main>
    );
}

// in React we create new componants writing functions - each componant can return exactely one element
// 1. function need to start with uppercase
// 2. function needs to return some mark-up
function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
    const hour = new Date().getHours();
    const open = 12;
    const close = 21;
    const isOpen = hour >= open && hour <= close
   
    return (<footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We are open untill {close}:00.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);