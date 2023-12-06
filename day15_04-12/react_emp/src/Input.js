import { Component } from "react";

class Input extends Component {
    state = { emp:{no:0,name:"",address:""} } 

    doSomething=()=>{
        const helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState===4 && helper.status===200){
                var response = JSON.parse(helper.responseText);
                if(response.affectedRows!==undefined && response.affectedRows>0){
                    alert("Data Inserted Successfully!");
                    this.setState({emp: {No : 0, Name: "", Address: ""}})

                }
            }

        }
        helper.open("POST", "http://127.0.0.1:9999/emps");
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send(JSON.stringify(this.state.emp));
    }

    onTextChanged = (args)=>{
        console.log(args.target.name + " changed to " + args.target.value);
        var emp1 = {...this.state.emp};

        emp1[args.target.name]= args.target.value;

        this.setState({emp: emp1})
    }

    render() { 
        return (
            <>
            <div>
            No: <input type="number" name="no" value={this.state.emp.no} onChange={this.onTextChanged}></input>
            <br></br>
            Name: <input type="text" name="name" value={this.state.emp.name} onChange={this.onTextChanged}></input>
            <br></br>
            Address: <input type="text" name="address" value={this.state.emp.address} onChange={this.onTextChanged}></input>
            <br></br>
            <button onClick={this.doSomething}>Add Record</button>
            </div>
            </>
        );
    }
}
 
export default Input;