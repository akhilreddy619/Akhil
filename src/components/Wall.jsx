import React, { Component } from "react";
import Brick from "./Brick";
import "../css/wall.css";

class Wall extends Component {
  state = {
    bricks: [
      { num: 1, col: "blue" },
      { num: 2, col: "blue" },
    ],
  };

  addBrick = () => {
    const bricks = [...this.state.bricks];
    const len = bricks.length + 1;
    bricks.push({ num: len, col: "blue" });
    this.setState({ bricks });
  };

  handleOnClick = (number) => {
    const bricks = [...this.state.bricks];
    bricks[number - 1]["col"] = "green";
    this.setState({ bricks });
  };

  render() {
    return (
      <div className="wall-container">
        {this.state.bricks.map((brick) => {
          return (
            <Brick
              onClick={this.handleOnClick}
              number={brick.num}
              color={brick.col}
            />
          );
        })}

        <div className="add-btn-box">
          <button onClick={this.addBrick} className="add-btn">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Wall;
