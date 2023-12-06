import { Component } from "react";

class Display extends Component {
    state = { users : [
        {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
        {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"}
       ]} 

    
    render() { 
        return (
            <>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Last Name</th>
                </thead>
                <tbody>{

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
            </>
        );
    }
}
 
export default Display;