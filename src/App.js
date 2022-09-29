import { useState } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Total from "./components/Total";

function App() {
  let productList = [
    { name: "iphone", price: 90000, qty: 0 },
    { name: "iphone2", price: 80000, qty: 0 },
    { name: "iphone3", price: 70000, qty: 0 },
  ];

  let [prodList, setProdList] = useState(productList);
  let [total, setTotal] = useState(0);

  let handleQty = (index, value) => {
    let newList = [...prodList];
    newList[index].qty += value;
    setProdList(newList);

    let newTotal = total;
    newTotal += newList[index].price;
    setTotal(newTotal);
  };

  let handleReset = () => {
    let newList = [...prodList];
    newList.map((product) => {
      product.qty = 0;
    });
    setProdList(newList);

    setTotal(0);
  };

  let handleAdd = (name,price,qty=0) =>{
    let newList = [...prodList];
    newList.push({name,price,qty})
    setProdList(newList);
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <AddProduct handleAdd={handleAdd}/>
        <ProductList productList={prodList} handleQty={handleQty} />
        <Total productList={prodList} handleReset={handleReset} total={total} />
      </main>
    </div>
  );
}

export default App;
