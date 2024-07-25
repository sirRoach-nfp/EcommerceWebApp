import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widgets/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/charts/Chart"
import ListTable from "../../components/table/Table"

import { useEffect, useMemo, useState } from "react"

import "./home.scss"
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { userRequest } from "../../requestMethods"
export default function Home() {

    const [userStats,setUserStats] = useState([])
    const [income,setIncome] = useState([])
    const [perc,setPerc] = useState([])
    let incomeTotal;
    let percTotal;

    useEffect(()=> {
        const getIncome = async () => {
            try{
                const res = await userRequest.get("/order/income")
                setIncome(res.data);
                setPerc(res.data[1].total * 100 / res.data[0].total - 100)
            }catch(err){console.log(err)}
        }

        getIncome();
    },[])


   
    
    console.log(incomeTotal)



    const MONTHS = useMemo(
        ()=> [
            "Jan", 
            "Feb", 
            "Mar", 
            "Apr", 
            "May", 
            "Jun", 
            "Jul", 
            "Aug", 
            "Sep", 
            "Oct", 
            "Nov", 
            "Dec",
        ],
        []
    )
    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("/user/stats");
                const stats = res.data.map(item => ({
                    name: MONTHS[item._id - 1],
                    "New User": item.total
                }));
                setUserStats(stats);
            } catch (err) {
                console.log(err);
            }
        };

        getStats();
    }, [MONTHS]);

    console.log(userStats)


    return(
        <div className="home">
            <Sidebar/>

            <div className="homeContainer"> 
                    <Navbar/>
               
                    <div className="widgets">
                        {income && income[1] && income[1].total && (
                            <Widget type="earning" percentage={perc} total={income[1].total} />
                        )}
                        <Widget type="user"/>
                        <Widget type="order"/>
                       
                     
                    </div>

                    <div className="charts">
                
                        <Chart aspect={4/1} title="User Analytics" data={userStats}/>
                    </div>


                    <div className="listContainer">
                        <div className="listTitle">Latest Transaction</div>
                        <ListTable/>
                    </div>

            </div>
        </div>
    )
}