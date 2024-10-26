import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Carts from "./components/Carts";
import Footer from "./components/Footer";

function App() {
  const [isDarkMood, setIsDarkMood] = useState(true);
  const dataTheme = isDarkMood ? "dark" : "light";
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const setMood = () => {
    setIsDarkMood(!isDarkMood);
    console.log(isDarkMood);
  };

  const setCartNumber = (id) => {
    const selectedProducts = products.find((product) => product.id === id);
    const existItem = cartItems.find((product) => product.id === id);
    if (!existItem) {
      const addedCartItems = [...cartItems, selectedProducts];
      setCartItems(addedCartItems);
    }else{
      alert('items already exists...')
    }
  };

  const removeProduct = (id) => {
    const newProducts = cartItems.filter((product) => product.id !== id);
    setCartItems(newProducts);
  };

  return (
    <div data-theme={dataTheme}>
      <div className="px-10">
        <Navbar setMood={setMood} cartItems={cartItems}></Navbar>
        <Banner></Banner>
        <div className="flex gap-5">
          <Products
            products={products}
            setCartNumber={setCartNumber}
          ></Products>
          <Carts removeProduct={removeProduct} cartItems={cartItems}></Carts>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
