import React, { Component } from "react";

export default class ClassEffectDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      count: 0,
    };
  }
  clickHandler() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  componentDidMount() {
    this.inputRef.current.value = this.state.count;
  }
  componentDidUpdate() {
    this.inputRef.current.value = this.state.count;
  }
  render() {
    return (
      <div>
        <h3>ClassEffectDemo</h3>
        <p>Count:{this.state.count}</p>
        <button onClick={this.clickHandler.bind(this)}>加一</button>
        <input ref={this.inputRef} type="text" />
      </div>
    );
  }
}
