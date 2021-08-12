import React, { Component } from 'react'

// ############################################################
// ################## Challenge Directions ####################
// ############################################################

// Convert to functional component using React Hooks

class Challenge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
    this.INTERVAL_ID = 1
  }
  componentDidMount() {

    this.INTERVAL_ID = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter += 1,
      }))
    }, 500);
  }

  componentDidUpdate(prevProps, _prevState) {
    if (prevProps.exampleProp !== this.props.exampleProp) {
      return true;
    }
  }

  componentWillUnmount() {
    clearInterval(this.INTERVAL_ID)
  }

  render() {
    return (
      <div>
        <h1>Counter:</h1>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}

export default Challenge