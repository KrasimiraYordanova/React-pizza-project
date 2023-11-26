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
          {/* react won't render true or false value let say "pizzaQty &&" -> this will give us 0 on the browser */}
          {/* because of this behaviour some says we should never use short circutingto make a conditional  */}
            {/* { pizzasQty > 0 && (
              <ul className="pizzas">
                {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)}
              </ul>) 
            } */}

          {/* Ternary operator */}
            { pizzasQty > 0 ? 
              (
                // react fregment - <> </>
                //<React.Fragment key=""> - if we have a list and we need the key
                <>
                  <p>Authentic Italian cuisin. Six creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
    
                  <ul className="pizzas">
                    {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)}
                  </ul>
                </>
              )
              : 
              (<p>We are still workig on our menu. Please, come back later</p>)
            }
            

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
function Pizza({pizzaObj}) {
  console.log(pizzaObj);

  // the early return returns either nothing or the whole componant
  // if(pizzaObj.soldOut) return null;

  return (
    // setting class conditionaly
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* setting text conditionaly */}
        <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
    const hour = new Date().getHours();
    const open = 12;
    const close = 22;
    const isOpen = hour >= open && hour <= close

    // early return - useful when we want to return entire componants, not pieces of jsx
    // if (!isOpen)
    //   return ( 
    //   <p> We are happy to welcome you between {open} and {close} </p>
    // );
   
    return (<footer className="footer">
      {/* since isOpen is true the second part, after "&&" will be returned */}
      {/* {isOpen && (
        <div className="order">
          <p>We are open untill {close}:00.</p>
          <button className="btn">Order</button>
        </div>)
      } */}
      {isOpen ? 
        < OpeningTime openHour={open} closeHour={close} isOpen={isOpen} /> 
         :
        ( <p> We are happy to welcome you between {open} and {close} </p>)
      }
    </footer>)
}

function OpeningTime(props) {
  return <div className="order">
          <p>We are open untill {props.closeHour}:00. You are very welcome top pay us a visit</p>
          <button className="btn">Order</button>
        </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);