import React from "react";
import { getNews, getAutoriz } from "../../store/selectors/selectors";
import { connect } from "react-redux";
import { getAllNews } from "../../store/action/data";

import { Redirect } from "react-router-dom";

import NewsLargeBlock from "./newsLargeBlock";

class News extends React.Component {
  state = {
    authorized: this.props.authorized,
    prof: false,
    home: false
  };
  onHome = () => {
    this.setState({ home: !this.state.home });
  };
  onProf = () => {
    this.setState({ prof: !this.state.prof });
  };
  componentDidMount() {
    this.props.getAllNews();
  }
  render() {
    const { home } = this.state;
    const { authorized } = this.state;
    const { prof } = this.state;
    if (home) {
      return <Redirect to="/home" />;
    }
    if (prof && authorized) {
      return <Redirect to="/profile" />;
    } else {
      if (authorized === false) {
        return <Redirect to="/login" />;
      }
    }
    return (
      <div>
        <div className="header">
          <div className="header-img">log</div>
          <div className="header-button-container">
            <div className="header-button" onClick={this.onHome}>
              Home
            </div>
            <div className="header-button">News</div>
            <div className="header-button" onClick={this.onProf}>
              Prof
            </div>
          </div>
        </div>
        <div className="main-block">
          <div className="block-news-wall">
            {this.props.news.articles.map(articles => (
              <NewsLargeBlock articles={articles}></NewsLargeBlock>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { news: getNews(state), authorized: getAutoriz(state) };
}
export default connect(mapStateToProps, { getAllNews })(News);
