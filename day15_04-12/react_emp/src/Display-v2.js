import { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
class Display extends Component {
    state = { users:[]};
    componentDidMount(){
        const helper = new XMLHttpRequest();
        helper.onreadystatechange = (req,res)=>{
            if(helper.readyState===4 && helper.status===200){
                var result = JSON.parse(helper.responseText);
                var userArray = result.data;
                this.setState({users:userArray});
            }
        }
        helper.open("GET","https://reqres.in/api/users");
        helper.send();
    }

    
    render() { 
        return (
            <>
            <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Last Name</th>
                </thead>
                <tbody className="table table-striped">{

                    this.state.users.map((user)=>{
                        return(
                        <tr> 
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td><img alt={user.first_name} src={user.avatar}></img></td>
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