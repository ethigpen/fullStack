import ProductsForm from "./components/ProductsForm";
import ShowAll from "./components/ShowAll";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState } from 'react';
import ShowOne from "./components/ShowOne";
import EditProduct from "./components/EditProduct";

function App() {

  const[submitted, setSubmitted] = useState(false)
  return (
    <BrowserRouter>
      <Route exact path = "/">
        <div className="container">
          <h1>Product Manager</h1>
          <ProductsForm submitted = {submitted} setSubmitted = {setSubmitted}></ProductsForm>
          <ShowAll submitted = {submitted}></ShowAll>
        </div>
      </Route>
      <Route exact path = "/product/:id">
        <ShowOne></ShowOne>
      </Route>
      <Route exact path = "/product/edit/:id">
        <EditProduct></EditProduct>
      </Route>
    </BrowserRouter>
  );
}

export default App;
