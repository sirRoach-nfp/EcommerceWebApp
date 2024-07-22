
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import ProductPage from "./pages/ProductPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import { useContext } from "react"
import{BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"

export default function App(){
  
  const user = true

  return(
    <Router>

        <Routes>
          
          <Route path="/" element={<Home/>}/>

          <Route path="/products/:category" element={<ProductList/>}/>

          <Route path="/product/:id" element={<ProductPage/>}/>

          <Route path="/cart" element={<Cart/>}/>

          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> 
          
           
     

          <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>

        </Routes>

    </Router>
  )
}