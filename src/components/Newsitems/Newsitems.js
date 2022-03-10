import React, { Component } from "react";
import "./Newsitems.css";

export class Newsitems extends Component {
  render() {
    // props using destruct
    let { title, desc, imgUrl, newsUrl, time } = this.props;
    return (
      <div>
        <div className="card shadow">
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/976a59b09e0e681e692bd7517498e3f2.jpg"
            }
            className="card-img-top custom-img"
            alt="..."
          />
          <div className="card-body">
            <h5
              className="card-title"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={title}
            >
              {title}
            </h5>
            <p
              className="card-text"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={desc}
            >
              {desc}
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated {time} ago</small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
