import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([])
  const [refresh, setRefresh] = useState(false)

  return (
    <>
      <Navbar products={products} setProducts={setProducts} refresh={refresh} setRefresh={setRefresh}/>
      <List products={products} setProducts={setProducts} refresh={refresh} setRefresh={setRefresh}/>
    </>
  );
}

export default App;
