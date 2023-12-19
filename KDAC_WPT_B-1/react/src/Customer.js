import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
function Customer() {

    const url = "http://127.0.0.1:5000/customers"
    const [customers,setCustomers]=useState([]);
    const [customer,setCustomer] = useState({custid:"",custname:"",mobileno:"",pin:""});

    const getRecords=()=>{
        
        axios.get(url).then((result)=>{
            setCustomers(result.data);
        });
    }

    useEffect(()=>{
        getRecords();
    },[])

    const addRecord = ()=>{
        debugger
        axios.post(url,customer).then((result)=>{
            if(result.data.affectedRows !==undefined && result.data.affectedRows>0){
                debugger
                getRecords();
                Reset();
            }
        });
    }

    const onTextChanged=(args)=>{
        var copy = {...customer};
        copy[args.target.name]=args.target.value;
        setCustomer(copy);
    }

    const updateRecord = ()=>{
        console.log("in updateRecord");
        axios.put(url+"/"+customer.custid,customer).then((result)=>{
            if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                Reset();
                alert("Record Updated");
                getRecords();
            }
        })
    }

    const editRecord=(no)=>{
        console.log(no+" in editRecord")
        for (let i = 0; i < customers.length; i++) {
           if(customers[i].custid===no){
            var customerToEdit = {...customers[i]};
            setCustomer(customerToEdit);
            console.log(customerToEdit);
           }
            
        }
    }

    const removeRecord=(no)=>{
        console.log(no+" is deleted");
        axios.delete(url+"/"+no).then((result)=>{
            if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                alert("Record Deleted");
                getRecords();
            }
        })
    }

    const Reset = ()=>{
        setCustomer({custname:"",mobileno:"",pin:""})
    }

    return (
        <div className='container' >
        <br></br>
    <div>
            <input value={customer.custname} type="text" name="custname" onChange={onTextChanged} placeholder='Enter Name'></input>
            <input value={customer.mobileno} type="text" name="mobileno" onChange={onTextChanged} placeholder='Enter Mobile no'></input>
            <input value={customer.pin} type="text" name="pin" onChange={onTextChanged} placeholder='Enter pin'></input>
            <br></br> <br></br>
            <button onClick={addRecord} className='btn btn-primary'>Add</button>{" "}
            <button onClick={updateRecord} className='btn btn-success'>Upate</button> {" "}
            <button onClick={Reset} className='btn btn-secondary'>Reset</button>
            <br></br> <br></br>
    </div>
    <div className='table table-responsive'>
    <table className='table table-border'>
        <thead>
            <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>Mobile No</th>
                <th>Pin</th>
            </tr>
        </thead>
        <tbody>
            {
                customers.map((cust)=>{
                    return (
                        <tr key={cust.custid}>
                        <td>{cust.custid}</td>
                        <td>{cust.custname}</td>
                        <td>{cust.mobileno}</td>
                        <td>{cust.pin}</td>
                        <td><button onClick={()=>{editRecord(cust.custid)}} className="btn btn-warning">Edit</button></td>
                        <td><button onClick={()=>{removeRecord(cust.custid)}} className="btn btn-danger">Delete</button></td>
                        </tr>
                )}
            
            )}
        </tbody>
    </table>
</div></div>);

}

export default Customer;