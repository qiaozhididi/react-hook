import React, { Component } from "react";
import EffectClassTimer from "./EffectClassTimer";
import EffectFunTimer from "./EffectFunTimer";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  clickClassHandler = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <h3>ParentComponent</h3>
        {this.state.show && <EffectClassTimer />}
        {this.state.show && <EffectFunTimer />}

        <button onClick={this.clickClassHandler}>卸载组件</button>
      </div>
    );
  }
}
