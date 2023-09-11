import { Component } from "react"

class counterClass extends Component{
    state = {
        counter: 0,
    }
    render(){
        return(
            <div>
                <p>counter : {counter}</p>
            </div>
        );
    }
}
export default counterClass;