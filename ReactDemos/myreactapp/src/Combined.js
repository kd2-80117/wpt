import { Component } from "react";
import About from "./About";
import Home from "./Home";

// function Combined() {
//     debugger;
//     return ( 
//       <>
//       <Home/>
//       <About></About>
//         </>  
//      );
// }

class Combined extends Component{

    componentDidMount(){
        console.log("First Time - Combined Component - Render is Done!");
    }

    componentDidUpdate(){
        console.log("Combined Component did Update called!");
    }

    render() {
        console.log("Inside Combined Component Render")
       // debugger;
        return (
             <><Home></Home>
             <About></About>
             </>
        );
    }
}

export default Combined;