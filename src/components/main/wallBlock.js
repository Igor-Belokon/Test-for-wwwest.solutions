import React from "react";

export default class WallBlock extends React.Component {
  render() {
    return (
      <div className="wall-massages">
        <div>{this.props.wall.theme}</div>
        <div>{this.props.wall.massage}</div>
      </div>
    );
  }
}
