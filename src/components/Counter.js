 import React, {Component} from "react";
 import "./Counter.css"

class Counter extends Component {
 
    render(){
      return(
            <div>
                <h1 className="number"> This is our counter : {this.props.number}</h1>
            </div>
       )
    }
}
export default Counter;