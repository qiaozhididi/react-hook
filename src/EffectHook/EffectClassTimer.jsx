import React, { Component } from "react";

const MyApi = {
  count: 0,
  subScribe(cb) {
    this.timer = setInterval(() => {
      cb(++this.count);
    }, 1000);
  },
  unSubScribe() {
    clearInterval(this.timer);
    this.reset();
  },
  reset() {
    this.count = 0;
  },
};
export default class EffectClassTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    MyApi.subScribe((count) => {
      this.setState({ count });
    });
  }
  componentWillUnmount() {
    MyApi.unSubScribe();
  }
  render() {
    return (
      <div>
        <h3>清除定时器</h3>
        <p>Count:{this.state.count}</p>
      </div>
    );
  }
}
