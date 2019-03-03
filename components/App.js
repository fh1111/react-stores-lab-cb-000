import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Your implementation here.
      counter: counterStore.getState()
    };
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
  }
  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener(counter => {
    this.setState({ counter });
  });
  }
  componentWillUnmount () {
    // Your implementation here.
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'></h1>
        <div className='actions'>
          <button className='decrement'>
            -
          </button>
          <button className='increment'>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
