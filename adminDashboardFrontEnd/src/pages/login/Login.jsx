import { useState } from "react"
import "./login.scss"
import { useDispatch } from "react-redux";
import { login} from "../../redux/apiCalls";
export default function Login(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    const dispatch = useDispatch()


    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch,{username,password});
    }
    return(
        <div className="loginContainer">
            <input type="text" placeholder="username" onChange={e=> setUsername(e.target.value)}/>
            <input type="text" placeholder="password" onChange={e=> setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}