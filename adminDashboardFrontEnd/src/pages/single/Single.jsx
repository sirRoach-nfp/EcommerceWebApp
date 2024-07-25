
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/charts/Chart"
import Table from "../../components/table/Table"
import "./single.scss"
export default function Single(){
    return(
        <div className="single">
            <Sidebar/>

            <div className="singleContainer">
                <Navbar/>

                <div className="top">

                    <div className="left">

                        <div className="editButton">
                            Edit
                        </div>
                        <h1 className="title">Information</h1>

                        <div className="item">
                            <img src="https://images.pexels.com/photos/20686233/pexels-photo-20686233/free-photo-of-woman-sitting-by-piano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg" />

                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>

                                <div className="detailItem">
                                    <span className="itemKey">Email</span>
                                    <span className="itemValue">JaneDoe@gmail.com</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Phone</span>
                                    <span className="itemValue">+64 0987 7212</span>
                                </div>


                                <div className="detailItem">
                                    <span className="itemKey">Address</span>
                                    <span className="itemValue">Bikini bottom pacific ocean</span>
                                </div>


                                <div className="detailItem">
                                    <span className="itemKey">Country</span>
                                    <span className="itemValue">ROanapur</span>
                                </div>


                            </div>

                        </div>

                    </div>

                    <div className="right">
                        <Chart aspect={3/1} title="User Spending ( Last 6 Months )"/>
                    </div>

                </div>

                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <Table/>
                </div>
            </div>
        </div>
    )
}