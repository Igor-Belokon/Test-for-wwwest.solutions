import React from "react";

export default class NewsSmallBlock extends React.Component {
  render() {
    console.log("news block ", this.props.articles);
    return (
      <div className="block-news">
        <div className="author">{this.props.articles.author}</div>
        <div className="title">{this.props.articles.title}</div>
      </div>
    );
  }
}
