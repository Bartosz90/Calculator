import React, { Component } from "react";
import "../styles/calculator.sass";

class Calculator extends Component {
  state = {
    screen: ""
  };
  btns = [
    { id: 1, content: "ce", number: false },
    { id: 2, content: "c", number: false },
    { id: 3, content: "<-", number: false },
    { id: 4, content: "/", number: false },
    { id: 5, content: "7", number: true },
    { id: 6, content: "8", number: true },
    { id: 7, content: "9", number: true },
    { id: 8, content: "*", number: false },
    { id: 9, content: "4", number: true },
    { id: 10, content: "5", number: true },
    { id: 11, content: "6", number: true },
    { id: 12, content: "-", number: false },
    { id: 13, content: "1", number: true },
    { id: 14, content: "2", number: true },
    { id: 15, content: "3", number: true },
    { id: 16, content: "+", number: false },
    { id: 17, content: "e", number: false },
    { id: 18, content: "0", number: true },
    { id: 19, content: ".", number: true },
    { id: 20, content: "=", number: false }
  ];

  handleCalc = (number, content) => {
    if (number) {
      this.setState({ screen: this.state.screen + content });
    }
    if (
      content === "-" ||
      content === "+" ||
      content === "/" ||
      content === "*"
    ) {
      if (this.state.screen.length === 0) {
        return;
      } else {
        this.setState({ screen: this.state.screen + content });
      }
    }
    if (content === "=") {
      const score = eval(this.state.screen).toString();
      this.setState({
        screen: score
      });
    }
    if (content === "c") {
      this.setState({ screen: "" });
    }
    if (content === "ce" || content === "<-") {
      const backspace = this.state.screen.substring(
        0,
        this.state.screen.length - 1
      );
      this.setState({ screen: backspace });
    }
  };
  render() {
    const btns = this.btns.map(btn => {
      return (
        <button
          key={btn.id}
          className="btn"
          onClick={() => this.handleCalc(btn.number, btn.content)}
        >
          {btn.content}
        </button>
      );
    });

    return (
      <div className="calc">
        <div className="screen">
          <h1>{this.state.screen}</h1>
        </div>
        {btns}
      </div>
    );
  }
}

export default Calculator;
