// function About() {
//     debugger;
    // return ( <>
    //         <table>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>Ritu</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         </> );
// }

import { Component } from "react";

class About extends Component{
    
    componentDidMount(){
        console.log("First Time - About Component - Render is Done!");
    }

    componentDidUpdate(){
        console.log("About Component did Update called!");
    }

    render() {
        console.log("Inside About Component Render")
       // debugger;
        return (
          <>
                <table>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ritu</td>
                        </tr>
                    </tbody>
                </table>
                </> );
   
    }
}

export default About;