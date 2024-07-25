import { DataGrid } from '@mui/x-data-grid';
//import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import "./datatable.scss"
import { useEffect, useState } from 'react';
import { publicRequest,userRequest } from '../../requestMethods';

import {useDispatch,useSelector} from "react-redux"
import { deleteProduct, getProducts } from '../../redux/apiCalls';

export default function ProductDatatable(){

    const [users,setUsers] = useState([])
    const products  = useSelector(state=>state.product.products)

    
    const [isLoading,setIsLoading] = useState(false)

    const dispatch = useDispatch();
   
    useEffect(()=> {
        getProducts(dispatch);
    },[dispatch])

    useEffect(()=> {
        const fetchUsers = async ()=>{
            try{
                const res = await userRequest.get(`/product/fetchProducts`)

                const dataWithId = res.data.map(user => ({
                    id: user._id, // Use _id as id
                    product: user.title,
                    img: user.img || 'N/A',
                    price: user.price 
 
                  }));

                  setUsers(dataWithId)

            }catch(err){
                console.log(err)
            }
        }

        fetchUsers();

    },[])



    const handleDelete = (id) => {
        deleteProduct(id,dispatch);
    }




    const userColumns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
          field: 'product', headerName: 'Title', width: 230, renderCell: (params) => (
            <div className="cellWithImg">
              <img 
                src={params.row.img} 
                alt={"N/A"} 
                className="cellImg" 
              />
              {params.row.title}
            </div>
          )
        },
        { field: 'inStock', headerName: 'Stock', width: 230 },
        { field: 'price', headerName: 'Price', width: 100 },
      ];


    const actionColumn = [
        {field: "action", headerName: "Action", width: 200, renderCell: (params)=> {

            return(
                <div className="cellAction">
                    <Link to={`/products/${params.row._id}`} style={{textDecoration: "none"}}>
                        <div className="viewButton">Edit</div>
                    </Link>
                        <div className="deleteButton" onClick={()=> handleDelete(params.row._id)}>Delete</div>
                    
                </div>
            )
        }}
    ]
    return(
        <div className="datatable">

            <div className="datatableTitle">
                Add New Product 
                <Link to="/products/new" style={{textDecoration: "none"}} className='Link'> 
                    Add New

                </Link>
            </div>
                <DataGrid className='datagrid'
                    rows = {products}
                    columns={userColumns.concat(actionColumn)}
                    pageSize = {5}
                    getRowId={(row)=> row._id}
                    rowsPerPageOptions={[5]}
                    checkboxSelection

                />




        </div>
    )
}
