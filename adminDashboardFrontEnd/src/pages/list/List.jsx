import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/datatable/Datatable"
import ProductDatatable from "../../components/datatable/ProductsDatatable"
import OrderDatatable from "../../components/datatable/OrderDatatable"
import "./list.scss"


export default function List({type}){
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                
                {type === "users" && <Datatable/>}
                {type === "products" && <ProductDatatable/>}
                {type === "orders" && <OrderDatatable/>}
                
            </div>
        </div>
    )
}