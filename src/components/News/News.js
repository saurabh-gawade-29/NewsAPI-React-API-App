import React, { Component } from "react";
import Newsitems from "../Newsitems/Newsitems";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
import moment from "moment";

export class News extends Component {
  // Proptypes
  static propTypes = {
    country: PropTypes.string,
    catergory: PropTypes.string,
  };
  // default prop
  static defaultProps = {
    country: "in",
    category: "general",
    // hide API Key Using Env variable
    api: process.env.REACT_APP_NEWS_API,
  };

  // article is variable you can use in state with the help of this keyword
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  // TODO: pageSize its a query parameter for news API read Docs
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&pageSize=12`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  clickPrevButton = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
      }&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page - 1
      }&pageSize=12`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      // Add page count and pass to url as string litral
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  clickNextButton = async () => {
    // its return Total number of pages
    // ? Totoal Result in API res/ 20 <- which is our harcoded value
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 12))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
        }&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page + 1
        }&pageSize=12`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        // Add page count and pass to url as string litral
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container my-4">
          <h1 className="text-center my-4">
            NEWS HEADLINES - INDIA
          </h1>
          {/* Spinner logic */}
          {this.state.loading && <Loader />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <Newsitems
                      title={element.title ? element.title : "NA || NO Desc || Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                      desc={element.description ? element.description : "NA || NO Desc || Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://media.wired.com/photos/6226759ee5e91991368ff63a/191:100/w_1280,c_limit/Gear-Apple-One-Primer-top.jpg"
                      }
                      newsUrl={element.url ? element.url : "NA"}
                      time={ element.publishedAt ? moment(element.publishedAt).startOf('hour').fromNow(true) : ""}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-center my-3">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark mr-4"
              onClick={this.clickPrevButton}
            >
              &larr; Prev
            </button>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 12)
              }
              type="button"
              className="btn btn-dark mr-4"
              onClick={this.clickNextButton}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
