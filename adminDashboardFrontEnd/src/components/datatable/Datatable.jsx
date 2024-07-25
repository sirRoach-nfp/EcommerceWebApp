
import { DataGrid } from '@mui/x-data-grid';
//import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import "./datatable.scss"
import { useEffect, useState } from 'react';
import { publicRequest,userRequest } from '../../requestMethods';




const defaultImage = 'https://via.placeholder.com/50'; 



export default function Datatable(){


    const [isLoading,setIsLoading] = useState(false)


    const [users,setUsers] = useState([])

    useEffect(()=> {
        const fetchUsers = async ()=>{
            try{
                const res = await userRequest.get(`user?new=true`)

                const dataWithId = res.data.map(user => ({
                    id: user._id, // Use _id as id
                    username: user.username,
                    img: user.profilePic || 'N/A',
                    status: user.isAdmin ? 'Admin' : 'User',
                    email: user.email,
                    age: user.age || 'N/A' // Adjust according to your data
                  }));

                  setUsers(dataWithId)

            }catch(err){
                console.log(err)
            }
        }

        fetchUsers();

    },[])




    const userColumns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
          field: 'user', headerName: 'User', width: 230, renderCell: (params) => (
            <div className="cellWithImg">
              <img 
                src={params.row.img} 
                alt={"N/A"} 
                className="cellImg" 
              />
              {params.row.username}
            </div>
          )
        },
        { field: 'email', headerName: 'Email', width: 230 },
        { field: 'age', headerName: 'Age', width: 100 },
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
                Add New User 
                <Link to="/users/new" style={{textDecoration: "none"}} className='Link'> 
                    Add New

                </Link>
            </div>
                <DataGrid className='datagrid'
                    rows = {users}
                    columns={userColumns.concat(actionColumn)}
                    pageSize = {5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection

                />




        </div>
    )
}