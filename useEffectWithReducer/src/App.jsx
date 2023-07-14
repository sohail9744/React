import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [newCart, setNewCart] = useState([]);
  console.log(products);

  useEffect(() => {
    theMainFunction();
  }, []);

  if (!products) {
    return <p>Please wait while we are loading</p>;
  }
  function theMainFunction() {
    fetch("http://localhost:3000/products")
      .then((data) => data.json())
      .then((data) => {
        // We have data
        // Normal Approach
        /* let count = 0;
        for (let i = 0; i < data.length; i++) {
          count += data[i].price;
        } */

        // Approach 2 with reduce
        const count = data.reduce((acc, current) => acc + current.price, 0);

        setTotalPrice(count.toFixed(2));
        setProducts(data);
      });
    fetch("http://localhost:3000/cart")
      .then((data) => data.json())
      .then((data) => {
        // We have data
        // Normal Approach
        /* let count = 0;
        for (let i = 0; i < data.length; i++) {
          count += data[i].price;
        } */

        // Approach 2 with reduce
        // const count = data.reduce((acc, current) => acc + current.price, 0);

        // setTotalPrice(count.toFixed(2));
        setNewCart(data);
      });
  }

  function removeFromCart(itemId) {
    fetch(`http://localhost:3000/cart/${itemId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        theMainFunction();
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.log(error);
      });
  }
  const addToChart = (itemId) => {
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: itemId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewCart(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };

  return (
    <div>
      <h1>My Products</h1>
      <p>Total Price: ₹ {totalPrice}</p>
      <ul>
        {products &&
          products.map((item) => {
            const isItemInCart = newCart.some(
              (newCart) => newCart.id === item.id
            );

            return (
              <li key={item.id}>
                {item.title}
                {!isItemInCart ? (
                  <button type="button" onClick={() => addToChart(item.id)}>
                    Add to Cart
                  </button>
                ) : (
                  <button type="button" onClick={() => removeFromCart(item.id)}>
                    Edit Cart
                  </button>
                )}
              </li>
            );
          })}
      </ul>
      <h3>My Chart</h3>
      <ul>
        {newCart &&
          newCart.map((cartItem) => {
            return (
              <li key={cartItem.id}>
                {cartItem.title}
                <button
                  type="button"
                  onClick={() => removeFromCart(cartItem.id)}
                >
                  delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
