import React from "react";

export default class NewsLargeBlock extends React.Component {
  render() {
    console.log("news block ", this.props.articles);
    return (
      <div className="block-news">
        <div className="title2">{this.props.articles.title}</div>
        <div className="content">{this.props.articles.content}</div>
        <div className="content2">Author: {this.props.articles.author}</div>
        <div className="content2">
          Published аt: {this.props.articles.publishedAt}
        </div>
      </div>
    );
  }
}
