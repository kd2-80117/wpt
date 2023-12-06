// function Home(){
//     debugger;
//     return <><h1>Welcome to Home</h1></>
// }

import { Component } from "react";

class Home extends Component
{
    state = {message:"hi!"}
    componentDidMount(){
        console.log("First Time - Home Component - Render is Done!");
    }

    componentDidUpdate(){
        console.log("Home Component did Update called!");
    }
    
    DoSomething=()=>{
        this.setState({message:"Bye!"});
    }

    render(){
        console.log("Inside Home Component Render")
       // debugger;
        return <>
        <h1>Welcome to Home!!! <br></br> Message is {this.state.message}</h1>
        <button onClick={this.DoSomething}>Click me</button>
        </>
    }
}

export default Home;