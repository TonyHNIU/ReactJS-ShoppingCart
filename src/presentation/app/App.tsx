import React from "react";
import ProductList from "../products/components/ProductList";
import * as DependenciesProvider from "../../di/DependenciesProvider";

const App: React.FC = () => {
  const productsPresenter = DependenciesProvider.provideProductsPresenter();

  return (
    <div>
      <ProductList
        productsPresenter={productsPresenter}
        onAddProductToCart={}
      />
    </div>
  );
};

export default App;
