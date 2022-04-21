import React, { useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import productApi from "./api/productApi";
import AlbumFeature from "./features/Album";
import Header from "./component/Header";
import NotFound from "./component/NotFound";
import TodoFeature from "./features/Todo";
import { Button } from "@mui/material";
import Content from "./features/Content";


function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params)
      console.log(productList);
    }
    fetchProducts();
  }, [])
  return (
    <div className="App">
      <Header />
      <Content />



    </div>
  );
}

export default App;
