import React, { useState } from "react";
import PriceEstimator from "./PriceEstimator";

function Products() {
  return (
    <div className="section">
      <div className="products">
        <h2>Products</h2>
        <img src="/img/products.png"></img>
      </div>
      <div className="price-estimator">
        <h2>Get a price estimate</h2>
        <p className="estimate-note">Note: these prices are as of May 2024</p>
        <PriceEstimator />
      </div>
    </div>
  );
}

export default Products;
