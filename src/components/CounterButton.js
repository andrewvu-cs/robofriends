import React, { useState, Component } from "react";

// const CounterButton = React.memo(({ color }) => {
//   const [count, setCount] = useState(0);
//   console.log("CounterButton");
//   const updateCount = () => {
//     setCount(count + 1);
//   };
//   return (
//     <button id="counter" color={color} onClick={() => updateCount()}>
//       Count: {count}
//     </button>
//   );
// });

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <button
        id="counter"
        color={this.props.color}
        onClick={() => this.setState(state => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
