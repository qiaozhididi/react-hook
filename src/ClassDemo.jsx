import React, { Component } from "react";

export default class ClassDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>Count:{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          加一
        </button>
      </div>
    );
  }
}
