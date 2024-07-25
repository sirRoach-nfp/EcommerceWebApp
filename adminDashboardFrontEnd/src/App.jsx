import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import { productInputs, userInputs } from "./formSource"
import "./components/style/dark.scss";
import { useContext, useState } from "react"
import { DarkModeContext } from "./context/darkModeContext"
import Product from "./pages/Product/Product"
function App() {
const [dark,setDark] = useState(false);

  let admin 


try {
    const rootData = JSON.parse(localStorage.getItem("persist:root"));
    if (rootData && rootData.user) {
        const userState = JSON.parse(rootData.user);
        if (userState.currentUser) {
            admin = userState.currentUser.accessToken;
        }
    }
} catch (error) {
    console.error("Error parsing localStorage data:", error);
}

  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Router>
        <Routes >
          <Route path="/login" element={<Login/>}/>
          {admin && (<>
          
            <Route path="/">
              <Route index element={<Home/>}/>
              

              <Route path="users">
                  <Route index element={<List type="users"/>}/>
                  <Route path=":userId" element={<Single/>}/>
                  <Route path="new" element={<New inputs = {userInputs} title="Add new user"/>}/>
              </Route>


              <Route path="products">
                  <Route index element={<List type="products"/>}/>
                  <Route path=":productId" element={<Product/>}/>
                  <Route path="new" element={<New inputs={productInputs} title="Add new product"/>}/>
              </Route>

              <Route path="orders">
                <Route index element={<List type={"orders"}/>}/>
              </Route>

            </Route>
          
          
          
          </>)}





        </Routes>
      </Router>
    </div>
  )
}

export default App
