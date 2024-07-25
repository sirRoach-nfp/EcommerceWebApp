import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import "./product.scss"
import { useLocation } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import {useSelector} from "react-redux"
import { publicRequest,userRequest } from '../../requestMethods';
const data = [
    {name: 'January', sale: Math.floor(Math.random()*1000)},
    {name: 'February', sale: Math.floor(Math.random()*1000)},
    {name: 'March', sale: Math.floor(Math.random()*1000)},
    {name: 'April', sale: Math.floor(Math.random()*1000)},
    {name: 'May', sale: Math.floor(Math.random()*1000)},
    {name: 'June', sale: Math.floor(Math.random()*1000)},
    {name: 'July', sale: Math.floor(Math.random()*1000)},
    {name: 'August', sale: Math.floor(Math.random()*1000)},
    {name: 'September', sale: Math.floor(Math.random()*1000)},
    {name: 'October', sale: Math.floor(Math.random()*1000)},
    {name: 'November', sale: Math.floor(Math.random()*1000)},
    {name: 'December', sale: Math.floor(Math.random()*1000)},
    
  ];



export default function Product(){
    const location = useLocation()
    const productId = location.pathname.split("/")[2];
    const [productStats,setProductStats] = useState([]);



    const [file,setFile] = useState("")

    const product = useSelector(state=>state.product.products.find(product=>product._id === productId));


    
    const MONTHS = useMemo(
        ()=> [
            "Jan", 
            "Feb", 
            "Mar", 
            "Apr", 
            "May", 
            "Jun", 
            "Jul", 
            "Aug", 
            "Sep", 
            "Oct", 
            "Nov", 
            "Dec",
        ],
        []
    )


    useEffect(()=> {
        const getStats = async () => {

            try{
                const res = await userRequest.get("/order/income?pid=" +productId);
                res.data.map((item)=>
                    setProductStats((prev)=>[
                        ...prev,
                        {name: MONTHS[item._id - 1], Sales: item.total},
                    ])
                );
            }
            catch(err){
                console.log(err)
            }
        }

        getStats();
    }, [productId,MONTHS])

    console.log(productStats)

    return(
        <div className="productMain">

            <Sidebar/>


            <div className="productContainer">
                <Navbar/>

                <div className="top">
                    <div className="saleChart">
                    <span>Sales Performance</span>

                    <ResponsiveContainer width="100%" aspect={3/1}>
                        <LineChart width={300} height={100} data={productStats}>
                            <Line type="monotone" dataKey="Sales" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                    
                    </div>
                    <div className="productInfo">
                        <div className="pdinfoHeader">
                            <img src={product.img} alt="" />
                            <h3>{product.title}</h3>
                        </div>


                        <div className="pdinfoBody">
                            <span>
                                <p className="tags">ID:</p>

                                <p>{product._id}</p>
                            </span>

                            <span>
                                <p className="tags">Sales:</p>

                                <p >123</p>
                            </span>

                            <span>
                                <p className="tags">Active:</p>

                                <p>yes</p>
                            </span>

                            <span>
                                <p className="tags">In Stock:</p>

                                <p>123</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <div className="productImgDiv">
                    <img src={product.img} alt="" />
                    </div>
                    <div className="editInputs">

                        <div className="inputsWrapper">
                            <div className="inputsContainer">
                                Image: <label htmlFor="file"><DriveFolderUploadOutlinedIcon className="icon"/></label>
                                <input type="file" id="file" style={{display: "none"}} onChange={e=>setFile(e.target.files[0])}/>
                            </div>

                            <div className="inputsContainer">
                                <label>Title</label>
                                <input type="text" placeholder={product.title} />
                            </div>

                            <div className="inputsContainer">
                                <label>Description</label>
                                <input type="text"  />
                            </div>

                            <div className="inputsContainer">
                                <label>Category</label>
                                <input type="text"  />
                            </div>

                            <div className="inputsContainer">
                                <label>Price</label>
                                <input type="text" placeholder={product.price} />
                            </div>

                            <div className="inputsContainer">
                                <label>Stock</label>
                                <input type="text"  />
                            </div>

                            <button>Update</button>
                        </div>

                    </div>

                </div>
            </div>
        
        </div>
    )
}