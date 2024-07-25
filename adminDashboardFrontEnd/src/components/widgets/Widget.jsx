import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import "./widget.scss"
export default function Widget({type,percentage,total}){

    let data;

  
    switch(type){
        case "user":
             data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className='icon' 
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255,0,0,0.2)"
                    }}

                />
             };
             break;


        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className='icon'
                    style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218,165,32,0.2)"
                    }}

                />
            };
            break;


        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "Compared to Last month",
                icon: <MonetizationOnOutlinedIcon className='icon'

                    style={{
                        color: "green",
                        backgroundColor: "rgba(0,128,0,0.2)"
                    }}

                />
            };
            break;


        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon'

                    style={{
                        color: "purple",
                        backgroundColor: "rgba(128,0,128,0.2)"
                    }}
                
                />
            };
            break;


        default: 
             break;
    }

    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && `$ ${total}`}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                  
                    % {Math.floor(percentage)}
                    {percentage < 0 ? (<ArrowDownwardOutlinedIcon/>) : (  <ArrowUpwardIcon/>)}
                </div>
                {data.icon}
            </div>
        </div>
    )
}