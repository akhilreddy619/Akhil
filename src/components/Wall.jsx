import React, { Component } from "react";
import Brick from "./Brick";
import "../css/wall.css";
import Button from "./Button";

class Wall extends Component {
  state = {
    bricks: [
      //   { num: 1, col: "blue" },
      //   { num: 2, col: "blue" },
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
    if (this.state.bricks.length == 0) {
      return (
        <React.Fragment>
          <p>No Bricks are present</p>
          <Button addBrick={this.addBrick} />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
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
        </div>
        <Button addBrick={this.addBrick} />
      </React.Fragment>
    );
  }
}

export default Wall;
