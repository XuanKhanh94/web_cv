import React, { useEffect } from "react";
import productApi from "./api/productApi";
import Header from "./component/Header";

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
      {/* 
      <p>
        <Link to='/todo'>Todo</Link>
      </p>
      <Button variant="contained" color="success" size="medium"><Link to="/album">Album</Link> </Button>
      <Switch>

        <Route path='/todo' component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch> */}
      <Header />

    </div>
  );
}

export default App;
