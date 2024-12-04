import React, { Component } from "react";

export default class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  inputRef = React.createRef();
  //所有依赖生命周期函数执行的业务逻辑都需要放在 componentDidMount 中
  componentDidMount() {
    setInterval(() => {
      console.log("componentDidMount");
    }, 1000);
    this.inputRef.current.value = this.state.count;
  }
  render() {
    return (
      <div>
        <h3>类型形式的生命周期函数</h3>
        <p>Count:{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          加一
        </button>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
