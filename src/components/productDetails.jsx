import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetailsParameters = () => {
  const params = useParams();
  const navigate = useNavigate();
  return <ProductDetails parameter={params} navigate={navigate} />;
};

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products

    const { navigate } = this.props;
    //navigate("/new-route");
    navigate("/products", { replace: true });
    // navigate('/new-route', { replace: true }); // Replace the current entry with a new route
  };
  render() {
    const { parameter } = this.props;
    return (
      <div>
        <h1>Product Details -{parameter.id} </h1>{" "}
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetailsParameters;
