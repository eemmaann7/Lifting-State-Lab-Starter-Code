import "./cart.css";

function ProductList({ cartCount, setCartCount }) {
  const products = ["Burger", "Pizza", "Fries"];

  return (
    <div className="product-list">
      <h2 className="section-title">
        Popular Items
      </h2>

      <ul>
        {products.map((product) => (
          <li key={product} className="product-item">
            <span style={{ color: "grey" }}>
              {product}
            </span>

            <button
              className="add-btn"
              onClick={() =>
                setCartCount(cartCount + 1)
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;