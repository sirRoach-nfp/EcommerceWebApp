import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
export default function Navbar(){
    const {dispatch} = useContext(DarkModeContext);
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="search..." />
                    <SearchOutlinedIcon/>
                </div>

                <div className="items">

                            <div className="item" >
                                <LanguageOutlinedIcon className="icon"/>
                                English
                            </div>

                            <div className="item">
                                <DarkModeOutlinedIcon className="icon" onClick={()=> dispatch({type: "TOGGLE"})}/>
                        
                            </div>

                            <div className="item">
                                <LanguageOutlinedIcon className="icon"/>
                            
                            </div>

                            <div className="item">
                                <LanguageOutlinedIcon className="icon"/>
                            
                            </div>

                            <div className="item"> 
                                <Badge  badgeContent={4} color='primary'>
                                    <NotificationsNoneOutlinedIcon className="icon"/>
                                </Badge>
                            
                            </div>

                            <div className="item">
                                <LanguageOutlinedIcon className="icon"/>
                            </div>

                            <div className="item">
                                <LanguageOutlinedIcon className="icon"/>
                            </div>

                            <div className="item">
                                <img src="https://images.pexels.com/photos/27152410/pexels-photo-27152410/free-photo-of-a-small-bird-sitting-on-top-of-a-wooden-post.jpeg" alt="" className="avatar" />
                            </div>

                </div>

            </div>
        </div>
    )
}
