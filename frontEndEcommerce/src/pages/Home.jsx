import Slider from "../components/Slider"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { useSelector,useDispatch } from "react-redux"
import { getUserCart } from "../redux/apiCalls"

export default function Home(){
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.currentUser?.accessToken || false);
    const uid = useSelector((state) => state.user.currentUser?._id || false);
    console.log("ACCESS TOKEN " + accessToken);


    if(accessToken){
        getUserCart(dispatch,uid)
    }
    return(

        <div>
            <Announcement></Announcement>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products pointer="category"/>
            <NewsLetter/>
            <Footer/>
            Home
        </div>
    )
}