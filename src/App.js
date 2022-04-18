import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import productApi from "./api/productApi";
import NotFound from "./component/NotFound";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo/index";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params={
        _limit:10,
      }
const productList=await productApi.getAll(params)
console.log(productList);
    }
    fetchProducts();
  }, [])
  return (
    <div className="App">

      <p>
        <Link to='/todo'>Todo</Link>
      </p>
      <Button variant="contained" color="success" size="medium"><Link to="/album">Album</Link> </Button>

      <Switch>

        <Route path='/todo' component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>

    </div>
  );
}

export default App;
