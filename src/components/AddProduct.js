import React from "react";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <form
        className="row m-5"
        onSubmit={() => {
          this.props.handleAdd(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="form-group col">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="product name"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="form-group col">
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="price"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col">
          Add
        </button>
        <p></p>
        <hr />
      </form>
    );
  }
}

export default AddProduct;

/*
  render() {
    return (
        <div className="mb-3 col-3">
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value});
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-3">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;



*/
