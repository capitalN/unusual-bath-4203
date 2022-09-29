import React from "react";

export default function Total(props) {
  return (
    <div className="row">
      <div className="col">
        <button
          className="btn btn-danger"
          onClick={() => {
            props.handleReset();
          }}
        >
          Reset 
        </button>
        <button className="btn btn-primary">Proceed to pay</button>
      </div>
      <div className="col">
        <h4>Total Amount : {props.total}</h4>
      </div>
    </div>
  );
}
