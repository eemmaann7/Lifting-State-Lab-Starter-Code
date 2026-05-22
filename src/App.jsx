import "./App.css";
import { useState } from "react";

import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

import CartSummary from "./components/CartSummary";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="app">
      <h1>Latabat</h1>

      {/* Exercise 1 */}
      <section className="section">
        <h1 className="title">Exercise 1: Lifted Counter State</h1>

        <CounterDisplay count={count} />

        <CounterControls
          count={count}
          setCount={setCount}
        />
      </section>

      {/* BONUS: Exercise 2 */}
      <section className="section">
        <h1 className="title">Exercise 2: Shopping Cart</h1>

        <CartSummary cartCount={cartCount} />

        <ProductList
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      </section>
    </div>
  );
}

export default App;