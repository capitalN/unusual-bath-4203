import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col">
        {props.product.name}-
        <h5>
          <span class="badge bg-secondary">₹{props.product.price}</span>
        </h5>
      </div>
      <div className="col">
        <button
          className="btn btn-primary"
          onClick={() => {props.handleQty(props.index, -1)}}
        >
          -
        </button>
        <button className="btn">{props.product.qty}</button>
        
        <button
          className="btn btn-primary"
          onClick={() => {props.handleQty(props.index, +1)}}
        >
          +
        </button>
      </div>
      <div className="col">
        <h4>{props.product.qty*props.product.price}</h4>
      </div>
      <hr />
    </div>
  );
}
