import "./cart.css";

function CartSummary({ cartCount }) {
  return (
    <div className="cart-summary">
      <div>
        <p className="cart-label">Your Cart</p>

        <p className="cart-count">
          {cartCount} items
        </p>
      </div>

      <button className="checkout-btn">
        Checkout →
      </button>
    </div>
  );
}

export default CartSummary;