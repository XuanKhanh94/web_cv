import React, { useEffect } from 'react';
import productApi from './api/productApi';
import Header from './component/Header';
import Content from './features/Content';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
