import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer mt-auto py-3 bg-light">
          <div className="container">
            <div className="text-muted text-center font-weight-bold">NewsAPI | The Best News App</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
