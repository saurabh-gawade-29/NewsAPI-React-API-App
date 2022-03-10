import React, { Component } from "react";

export class About extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <div className="container py-4">
          <header className="pb-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center text-dark text-decoration-none"
            >
              <span className="font-weight-bold h1">About Us</span>
            </a>
          </header>
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Our Mission</h1>
              <p className="col-md-8 fs-4">
                Using a series of utilities, you can create this jumbotron, just
                like the one in previous versions of Bootstrap. Check out the
                examples below for how you can remix and restyle it to your
                liking.
              </p>
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Our Services (And Benefits)</h2>
                <p>
                  Swap the background-color utility and add a `.text-*` color
                  utility to mix up the jumbotron look. Then, mix and match with
                  additional component themes and more.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>Our Story (History)</h2>
                <p>
                  Or, keep it light and add a border for some added definition
                  to the boundaries of your content. Be sure to look under the
                  hood at the source HTML here as we've adjusted the alignment
                  and sizing of both column's content for equal-height.
                </p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
