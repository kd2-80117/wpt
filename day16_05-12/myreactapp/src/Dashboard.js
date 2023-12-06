import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Dashboard() 
{
    const url = "http://127.0.0.1:9999/emps";
    const [emps,setEmps] = useState([]);
    const [emp,setEmp] =useState({No:"",Name:"",Address:""})
    const [message,setMessage]=useState("");
    const [searchTxt,setSearchTxt]=useState("");

    const FetchRecords = ()=>{
            axios.get(url).then((result)=>{ setEmps(result.data) })
    }

    const RemoveRecord = (No)=>{
            console.log(No+" is getting deleted");
            var deleteUrl = url +"/"+No;
            axios.delete(deleteUrl).then((result)=>{
                if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                    // alert("Record Deleted Successfully!");
                    setMessage("Record Deleted Successfully!");
                    window.setTimeout( ()=>{
                        setMessage("")
                        FetchRecords()
                    },2000);
                }
            })
    }

    const OnTextChanged = (args)=>{  
        var copyOfEmp = {...emp};
        copyOfEmp[args.target.name] = args.target.value;
        setEmp(copyOfEmp);
    }

    const OnSearchTextChanged = (args)=>{
        
        setSearchTxt(args.target.value)
    }

    const AddRecord = ()=>{
        axios.post(url,emp).then((result)=>{
            if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
               
                setMessage("Record Added Successfully!");
                    window.setTimeout( ()=>{
                        setMessage("")
                        FetchRecords()
                        Reset()
                    },2000);
            }
        })
    }

    const EditRecord = (No)=>{
        for (let i = 0; i < emps.length; i++) {
            if(emps[i].No === No){
                var empToEdit = {...emps[i]};
                setEmp(empToEdit);
                break;
            }
            
        }
        
    }

    const UpdateRecord = ()=>{
       
        var editUrl = url +"/"+emp.No;
        axios.put(editUrl,emp).then((result)=>{
            if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                setMessage("Record Updated Successfully!");
                window.setTimeout( ()=>{
                    setMessage("")
                    FetchRecords()
                    Reset()
                },2000);
            }
        })
    }

    const Reset = ()=>{
        setEmp({No:"",Name:"",Address:""});
    }

    useEffect(()=>{ FetchRecords() },[])

    return ( 
            <div className='container'>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <td>No</td>
                                <td><input type='text' name='No' 
                                            value={emp.No}
                                            onChange={OnTextChanged}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td><input type='text' name='Name' 
                                            value={emp.Name}
                                            onChange={OnTextChanged}></input></td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td><input type='text' name='Address' 
                                            value={emp.Address}
                                            onChange={OnTextChanged}></input></td>
                            </tr>
                            <tr> 
                                <td></td> 
                                <td>
                                    <button onClick={AddRecord} className='btn btn-primary'>Add Record</button>{" "}
                                    <button onClick={UpdateRecord} className='btn btn-success'>Update Record</button>{" "}
                                    <button onClick={Reset} className='btn btn-info'>Reset</button>
                                </td>
                             </tr>
                        </tbody>
                    </table>
                </div>
                <hr/>
                <div className='alert alert-success'>{message}</div>
                <hr></hr>
                <div><center> Search By Address {" "}<input name='search' value={searchTxt} onChange={OnSearchTextChanged} type='search'></input></center></div>
                <hr></hr>
                <div className='table-responsive'>
                    <table className='table table-bordered table-striped'>
                       <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th></th>
                                <th></th>
                            </tr>
                       </thead>
                       <tbody>
                            { emps.map((emp)=> {

                                if (searchTxt==="") {
                                    return <tr key={emp.No}>
                                    <td>{emp.No}</td>
                                    <td>{emp.Name}</td>
                                    <td>{emp.Address}</td>
                                    <td><button className='btn btn-warning'
                                        onClick={()=>{EditRecord(emp.No)}}>Edit 
                                        <img alt='edit-icon'  src={"http://localhost:3000/pencil-square.svg"}></img></button></td>

                                    <td><button className='btn btn-danger' 
                                        onClick={()=>{RemoveRecord(emp.No)}}>Delete 
                                        <img alt='delete-icon' src={"http://localhost:3000/trash-fill.svg"}></img>
                                        </button>
                                    </td>
                                    </tr>
                                } else {
                                    if(emp.Address.toLowerCase().includes(searchTxt.toLowerCase())){
                                        return <tr key={emp.No}>
                                    <td>{emp.No}</td>
                                    <td>{emp.Name}</td>
                                    <td>{emp.Address}</td>
                                    <td><button className='btn btn-warning'
                                        onClick={()=>{EditRecord(emp.No)}}>Edit 
                                        <img alt='edit-icon'  src={"http://localhost:3000/pencil-square.svg"}></img></button></td>

                                    <td><button className='btn btn-danger' 
                                        onClick={()=>{RemoveRecord(emp.No)}}>Delete 
                                        <img alt='delete-icon' src={"http://localhost:3000/trash-fill.svg"}></img>
                                        </button>
                                    </td>
                                    </tr>
                                    }else{
                                        return null;
                                    }
                                    
                                }
                                
                            }) 
                           
                                }
                                
                            
                       </tbody>
                    </table>
                </div>

            </div>
     );
}

export default Dashboard;