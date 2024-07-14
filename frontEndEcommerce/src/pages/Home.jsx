import Slider from "../components/Slider"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import Products from "../components/Products"
export default function Home(){

    return(

        <div>
            <Announcement></Announcement>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            Home
        </div>
    )
}