import { DataGrid } from '@mui/x-data-grid';
//import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import "./datatable.scss"
import { useEffect, useState } from 'react';
import { publicRequest,userRequest } from '../../requestMethods';

import {format} from "timeago.js"

export default function OrderDatatable(){

    
    const [isLoading,setIsLoading] = useState(false)


    const [orders,setOrders] = useState([])

    useEffect(()=> {
        const fetchOrders = async ()=>{
            try{
                const res = await userRequest.get(`/order/`)

                const dataWithId = res.data.map(order => ({
                    id: order._id, // Use _id as id
                    createdAt: format(order.createdAt),
                    amount: order.amount || 'N/A',
                    status:order.status,

                  }));

                  setOrders(dataWithId)

            }catch(err){
                console.log(err)
            }
        }

        fetchOrders();

    },[])




    const userColumns = [
        { field: 'id', headerName: 'Customer', width: 200 },
        
        { field: 'createdAt', headerName: 'Date', width: 230 },
        { field: 'amount', headerName: 'Amount', width: 100 },
        {
          field: 'status', headerName: 'Status', width: 160, renderCell: (params) => (
            <div className={`cellWithStatus ${params.row.status}`}>
              {params.row.status}
            </div>
          )
        },
      ];


    const actionColumn = [
        {field: "action", headerName: "Action", width: 200, renderCell: ()=> {

            return(
                <div className="cellAction">
                    <Link to="/users/test" style={{textDecoration: "none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                        <div className="deleteButton">Delete</div>
                    
                </div>
            )
        }}
    ]
    return(
        <div className="datatable">

            <div className="datatableTitle">
                Orders 

            </div>
                <DataGrid className='datagrid'
                    rows = {orders}
                    columns={userColumns.concat(actionColumn)}
                    pageSize = {5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection

                />




        </div>
    )
}