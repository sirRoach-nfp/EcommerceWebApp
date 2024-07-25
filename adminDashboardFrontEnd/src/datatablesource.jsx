import { width } from "@mui/system"
const defaultImage = 'https://via.placeholder.com/50'; 

export const userColumns = [

    { field: '_id', headerName: 'ID', width: 70 },
    {field: "user", headerName: "User", width: 230, renderCell: (params) => {
        return(
            <div className="cellWithImg">
                <img src={params.row.img || defaultImage} alt="" className="cellImg" />
                {params.row.username}
            </div>
        )
    }},

    {
        field: "email", headerName: "Email", width: 230,
    },


    {
        field: "age", headerName: "Age", width: 100,
    },

    {
        field: "status", headerName: "Status", width: 160,
        renderCell: (params)=> {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]


export const userRows = [

    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/7205754/pexels-photo-7205754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "1snow@gmail.com",
        age: 36,
    },
    {
        id: 2,
        username: "Stark",
        img: "https://images.pexels.com/photos/7205754/pexels-photo-7205754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "2stark@gmail.com",
        age: 37,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/7205754/pexels-photo-7205754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "3lannister@gmail.com",
        age: 38,
    },
    {
        id: 4,
        username: "Targaryen",
        img: "https://images.pexels.com/photos/7205754/pexels-photo-7205754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "4targaryen@gmail.com",
        age: 39,
    },
    {
        id: 5,
        username: "Bran",
        img: "https://images.pexels.com/photos/7205754/pexels-photo-7205754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "5bran@gmail.com",
        age: 40,
    },
    {
        id: 6,
        username: "Joffrey",
        img: "https://images.pexels.com/photos/7205754/pexels-photo-7205754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "6joffrey@gmail.com",
        age: 41,
    },
    {
        id: 7,
        username: "Robert",
        img: "https://images.pexels.com/photos/7205754/pexels-photo-7205754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "7robert@gmail.com",
        age: 42,
    },
    {
        id: 8,
        username: "Jaime",
        img: "https://images.pexels.com/photos/7205754/pexels-photo-7205754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "8jaime@gmail.com",
        age: 43,
    },
    {
        id: 9,
        username: "Renly",
        img: "https://images.pexels.com/photos/7205754/pexels-photo-7205754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "9renly@gmail.com",
        age: 44,
    },
    {
        id: 10,
        username: "Tywin",
        img: "https://images.pexels.com/photos/7205754/pexels-photo-7205754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "10tywin@gmail.com",
        age: 45,
    },



]