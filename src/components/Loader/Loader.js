import React, { Component } from "react";
import { Triangle } from "react-loader-spinner";
import './Loader.css'

export class Loader extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center loading">
        <Triangle height="100" width="100" color="grey" ariaLabel="loading" />
      </div>
    );
  }
}

export default Loader;
