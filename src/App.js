import React, { Component } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetailsParameters from "./components/productDetails";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/products/:id"
            element={<ProductDetailsParameters />}
          ></Route>
          <Route path="/posts/:year?/:month?" element={<Posts />}></Route>
          <Route path="/admin/*" element={<Dashboard />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    );
  }
}
export default App;
