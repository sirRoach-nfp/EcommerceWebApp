import Slider from "../components/Slider"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"



export default function Home(){

    return(

        <div>
            <Announcement></Announcement>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
            Home
        </div>
    )
}