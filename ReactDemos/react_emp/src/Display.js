import { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
class Display extends Component {
    state = {emps:[]};
    componentDidMount(){
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = (req,res)=>{
            if(helper.readyState===4 && helper.status===200){
                debugger;
                var result = JSON.parse(helper.responseText);
                var empArray = result;
                this.setState({emps:empArray});
            }
        }
        helper.open("GET","http://127.0.0.1:9999/emps");
        helper.send();
    }

    componentDidUpdate()
    {
        debugger;
        console.log("Data Received from server hence UI updated.")
    }

    render() { 
        debugger;
        return (
            <>
            <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Address</th>
                   
                </thead>
                <tbody className="table table-striped">{

                    this.state.emps.map((emp)=>{
                        return(
                        <tr key={emp.no}> 
                        <td>{emp.no}</td>
                        <td>{emp.name}</td>
                        <td>{emp.address}</td>
                        
                    </tr>)
                    })

                    }
                    
                </tbody>
            </table>
            </div>
            </>
        );
    }
}
 
export default Display;