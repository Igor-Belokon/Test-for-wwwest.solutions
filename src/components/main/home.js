import React from "react";
import { connect } from "react-redux";
import { addToWall, getAllNews } from "../../store/action/data";
import { getWall, getNews, getAutoriz } from "../../store/selectors/selectors";

import { Redirect } from "react-router-dom";

import WallBlock from "./wallBlock";

import NewsSmallBlock from "../news/newsSmallBlock";

class Home extends React.Component {
  state = {
    news: false,
    authorized: this.props.authorized,
    prof: false,
    theme: "",
    massage: ""
  };
  componentDidMount() {
    this.props.getAllNews();
  }
  Add = () => {
    const massages = {
      theme: this.state.theme,
      massage: this.state.massage
    };
    this.props.addToWall(massages);
  };
  handleChange = event => {
    this.setState({ [event.target.name]: [event.target.value] });
  };
  onNews = () => {
    this.setState({ news: !this.state.news });
  };
  onProf = () => {
    this.setState({ prof: !this.state.prof });
  };
  render() {
    const { news } = this.state;
    const { authorized } = this.state;
    const { prof } = this.state;
    console.log("news in block", this.props.news);
    if (news) {
      return <Redirect to="/news" />;
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
          <div className="header-img">Home</div>
          <div className="header-button-container">
            <div className="header-button">Home</div>
            <div className="header-button" onClick={this.onNews}>
              News
            </div>
            <div className="header-button" onClick={this.onProf}>
              Prof
            </div>
          </div>
        </div>
        <div className="main-block">
          <div className="wall">
            <div className="massage-input">
              <input
                className="input"
                type="theme"
                name="theme"
                placeholder="theme"
                value={this.state.theme}
                onChange={this.handleChange}
              />
              <input
                className="input2"
                type="massage"
                name="massage"
                value={this.state.massage}
                onChange={this.handleChange}
              />
              <button className="button-add" onClick={this.Add}>
                add
              </button>
            </div>
            <div className="block-wall">
              {this.props.wall.map(wall => (
                <WallBlock wall={wall}></WallBlock>
              ))}
            </div>
          </div>
          <div>
            <div className="block-news">
              {this.props.news.articles.map(articles => (
                <NewsSmallBlock articles={articles}></NewsSmallBlock>
              ))}
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    wall: getWall(state),
    news: getNews(state),
    authorized: getAutoriz(state)
  };
}
export default connect(mapStateToProps, { addToWall, getAllNews })(Home);
