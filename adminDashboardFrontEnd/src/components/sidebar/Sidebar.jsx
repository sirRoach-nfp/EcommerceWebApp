import "./sidebar.scss"

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { DarkModeContext } from "../../context/darkModeContext";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import { useContext } from "react";
export default function Sidebar(){
    const {dispatch} = useContext(DarkModeContext);

    return(
       <div className="sidebar"> 

            <div className="top">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">mantaAdmin</span>
                </Link>
            </div>

            <hr />

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">TITLE</p>

                    <Link to="/users" style={{textDecoration: "none"}}>
                        <li>
                            <PersonIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>

                    <Link to="/products" style={{textDecoration: "none"}}>
                        <li>
                            <Inventory2Icon className="icon"/>
                            <span>Products</span>
                        </li>
                    </Link>


                    <Link to="/orders" style={{textDecoration: "none"}}>
                        <li>
                            <ShoppingCartIcon className="icon"/>
                            <span>Orders</span>
                        </li>
                    </Link>
                    
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>


                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentIcon className="icon"/>
                        <span>Stats</span>
                    </li>


                    
                    <li>
                        <NotificationsActiveIcon className="icon"/>
                        <span>Notification</span>
                    </li>

                    <p className="title">SERVICE</p>

                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>

                    <li>
                        <ManageAccountsIcon className="icon"/>
                        <span>Profile</span>
                    </li>



                    
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>


                </ul>
            </div>

            <div className="bottom">

                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>


            </div>

       </div>
    )
}
