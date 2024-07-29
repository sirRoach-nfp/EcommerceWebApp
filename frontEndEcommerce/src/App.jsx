
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import ProductPage from "./pages/ProductPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import { useContext } from "react"
import{BrowserRouter as Router,Routes,Route,Navigate,useNavigate} from "react-router-dom"
import Success from "./pages/Success"
import { useSelector } from "react-redux"


export default function App(){
  
  const user = useSelector((state)=> state.user.currentUser);
  //const token = useSelector((state) => state.user.currentUser.accessToken)


  return(
    <Router>

        <Routes>
          
          <Route path="/" element={<Home/>}/>

          <Route path="/products/category/:category" element={<ProductList/>}/>
          <Route path="/products/search/:searchValue" element={<ProductList/>}/>

          <Route path="/product/:id" element={<ProductPage/>}/>

          <Route path="/cart" element={<Cart/>}/>

          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> 
          <Route path="/success" element={<Success/>}/>
           
     

          <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>

        </Routes>

    </Router>
  )
}