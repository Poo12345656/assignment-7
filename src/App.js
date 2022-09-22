import React, { Component } from "react";
import Counter from './components/Counter'
import "./App.css"
class App extends Component {
  constructor() {
    super();
    this.state = { 
      count: 0
    }
  }
  

  increment (method) {
    const count = method==="inc"? this.state.count + 1 : this.state.count - 1 
    this.setState({ count})
  }
  resetCount() {
    this.setState({
      count: 0
    });
  }
 
  render() {
    return (
      <div className="container">
        <div className="test">
           <h1 className="heading"> Counter App Using Class Component</h1>
          <Counter number={this.state.count}></Counter>
        <div>

          <button onClick={() => { this.increment("inc") }} className="increment">Increment</button>

          <button onClick={() => { this.increment("dic") }} className="decrement">Decrement</button>

          <button onClick={() => this.resetCount()} className="reset">Reset</button>

          </div>
        </div>
</div>
      
    );
  }
}

export default App;