import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
function Dashborad() {

    const url = "http://127.0.0.1:5000/product";
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({ productid: "", producttitle: "", price: "", stock: "" })


    const FetchRecord = () => {
        axios.get(url).then((result) => {

            setProducts(result.data);

        }, []);

    }


    const RemoveRecord = (id) => {

        
        if(window.confirm("Confirm !!! You WANT TO DELETE a product")){
        var delurl = url + "/" + id;
        axios.delete(delurl).then((result) => {
            if (result.data.afftedRows !== undefined && result.data.afftedRows > 0) {
                FetchRecord();
            }
        
        })
    }
    }

    const AddRecord = () => {
        debugger;
        axios.post(url, product).then((result) => {
            if (result.data.afftedRows !== undefined && result.data.afftedRows > 0) {
                FetchRecord();
                Reset();
            }
        })

    }
    const Reset = () => {
        setProduct({ productid: "", producttitle: "", price: "", stock: "" })
    }

    const EditRecords = (id) => {
        debugger;
        for (var i = 0; i < products.length; i++) {
            if (products[i].productid === id) {
                var productToEdit = { ...products[i] }
                setProduct(productToEdit);
                break;
            }
        }
    }
    const UpdateRecord = () => {
        debugger;
        var upurl = url + "/" + product.productid;
        axios.put(upurl, product).then((result) => {
            if (result.data.afftedRows !== undefined && result.data.afftedRows > 0) {
                FetchRecord();
                Reset();
            }
        })

    }

    useEffect(() => {
        FetchRecord();
    })
    const OntextChanged = (args) => {
        var copyofp = { ...product }
        copyofp[args.target.name] = args.target.value
        setProduct(copyofp);

    }

    return (
        <div className="container">
            <br /><br /><br /><br />
            <div className="table-responsive" >

                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>No : </td>
                            <td><input type="number" name="productid" value={product.productid} onChange={OntextChanged}></input></td>
                        </tr>
                        <tr>
                            <td>Tittle : </td>
                            <td><input type="text" name="producttitle" value={product.producttitle} onChange={OntextChanged}></input></td>
                        </tr>
                        <tr>
                            <td>Price : </td>
                            <td><input type="number" name="price" value={product.price} onChange={OntextChanged}></input></td>
                        </tr>
                        <tr>
                            <td>Stock : </td>
                            <td><input type="number" name="stock" value={product.stock} onChange={OntextChanged}></input></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button className='btn btn-primary' onClick={AddRecord} >Add Record</button>
                                <button className='btn btn-success' onClick={UpdateRecord}>Update Record</button>
                                <button className='btn btn-info' onClick={Reset}>Reset Record</button>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>
            <hr /><hr />

            <div className="table-responsive">
                <table className="table table-borderd">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tittle</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                return (<tr key={product.productid}  class={product.stock===0 ? 'table-danger': 'table-info'  } >

                                   

                                    <td>{product.productid}</td>
                                    <td>{product.producttitle}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td> <button className="btn btn-warning" onClick={() => {
                                        EditRecords(product.productid);
                                    }}>EDIT</button></td>
                                    <td> <button className="btn btn-danger" onClick={() => {
                                        RemoveRecord(product.productid);
                                    }}>DELETE</button></td>
                                </tr>)
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>



    );


}

export default Dashborad;