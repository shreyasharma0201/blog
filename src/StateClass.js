import { Component} from "react";

class StateClass extends Component{
    constructor(){
        super()
        this.state = {
            data: 'Welcome visitor'
        }
    }
    update(){
        this.setState({
            data: 'Thank you'
        })
    }
    render(){
        return (
          <div>
            <h1>{this.state.data}</h1>
            <button onClick={() => this.update()}>Subscribe</button>
          </div>
        ); 
    }
}

export default StateClass;