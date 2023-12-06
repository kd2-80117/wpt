import { Component } from "react";

class Test extends Component {
    state = { message:"Hi"  } 

    DoSomething = ()=>{
        console.log("setState is called");
        this.setState({message:"Bye"})
    }

    componentDidMount(){
        console.log("inside component Did Mount");
    }

    componentDidUpdate(){
        console.log("inside component did update");
    }


    render() { 
        console.log("Inside Test - Render");
        return (<>
            <h1>{this.state.message}</h1>
            <button onClick={this.DoSomething}>Click Me</button>
        </>);
    }
}
 
export default Test;
