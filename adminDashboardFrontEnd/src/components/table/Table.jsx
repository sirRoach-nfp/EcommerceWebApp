
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.scss"

export default function ListTable() {

    const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://www.complink.com.ph/cdn/shop/products/000003_28872_e0345716-5fd0-4497-abf1-adeb0a294f00_500x500.jpg?v=1660202771",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 1143156,
          product: "HP Pavilion 15",
          img: "https://www.complink.com.ph/cdn/shop/products/000003_28872_e0345716-5fd0-4497-abf1-adeb0a294f00_500x500.jpg?v=1660202771",
          customer: "Jane Doe",
          date: "15 April",
          amount: 950,
          method: "Credit Card",
          status: "Pending",
        },
        {
          id: 1143157,
          product: "Dell XPS 13",
          img: "https://www.complink.com.ph/cdn/shop/products/000003_28872_e0345716-5fd0-4497-abf1-adeb0a294f00_500x500.jpg?v=1660202771",
          customer: "Sam Wilson",
          date: "22 May",
          amount: 1200,
          method: "Online Payment",
          status: "Approved",
        },
        {
          id: 1143158,
          product: "Lenovo ThinkPad X1",
          img: "https://www.complink.com.ph/cdn/shop/products/000003_28872_e0345716-5fd0-4497-abf1-adeb0a294f00_500x500.jpg?v=1660202771",
          customer: "Kate Johnson",
          date: "30 June",
          amount: 1300,
          method: "Cash on Delivery",
          status: "Declined",
        },
        {
          id: 1143159,
          product: "Asus ROG Strix",
          img: "https://www.complink.com.ph/cdn/shop/products/000003_28872_e0345716-5fd0-4497-abf1-adeb0a294f00_500x500.jpg?v=1660202771",
          customer: "Mike Brown",
          date: "8 July",
          amount: 1450,
          method: "Credit Card",
          status: "Approved",
        },
        {
          id: 1143160,
          product: "MacBook Pro",
          img: "https://www.complink.com.ph/cdn/shop/products/000003_28872_e0345716-5fd0-4497-abf1-adeb0a294f00_500x500.jpg?v=1660202771",
          customer: "Alice Green",
          date: "18 August",
          amount: 2200,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 1143161,
          product: "Samsung Galaxy Book",
          img: "https://www.complink.com.ph/cdn/shop/products/000003_28872_e0345716-5fd0-4497-abf1-adeb0a294f00_500x500.jpg?v=1660202771",
          customer: "Bob Martin",
          date: "24 September",
          amount: 900,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 1143162,
          product: "Microsoft Surface Laptop",
          img: "https://www.complink.com.ph/cdn/shop/products/000003_28872_e0345716-5fd0-4497-abf1-adeb0a294f00_500x500.jpg?v=1660202771",
          customer: "Chris Evans",
          date: "12 October",
          amount: 1600,
          method: "Credit Card",
          status: "Declined",
        },
        {
          id: 1143163,
          product: "Razer Blade 15",
          img: "https://www.complink.com.ph/cdn/shop/products/000003_28872_e0345716-5fd0-4497-abf1-adeb0a294f00_500x500.jpg?v=1660202771",
          customer: "Natalie Portman",
          date: "29 November",
          amount: 2000,
          method: "Online Payment",
          status: "Approved",
        },
        {
          id: 1143164,
          product: "LG Gram 17",
          img: "https://www.complink.com.ph/cdn/shop/products/000003_28872_e0345716-5fd0-4497-abf1-adeb0a294f00_500x500.jpg?v=1660202771",
          customer: "Paul Walker",
          date: "5 December",
          amount: 1800,
          method: "Cash on Delivery",
          status: "Pending",
        },
      ];



    return(

        <div className="table">


        
            <TableContainer component={Paper} className='tbCont'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>

                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
            
    
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                        >
                        <TableCell className='tableCell'>
                            {row.id}
                        </TableCell>

                        <TableCell className="tableCell">
                            
                            
                            <div className="cellWrapper">
                                <img src={row.img} alt="" className="image" />
                                {row.product}
                            </div>


                        </TableCell>
                        <TableCell className="tableCell">{row.customer}</TableCell>
                        <TableCell className="tableCell">{row.date}</TableCell>
                        <TableCell className="tableCell">{row.amount}</TableCell>
                        <TableCell className="tableCell">{row.method}</TableCell>
                        <TableCell className="tableCell">
                            <span className={`status ${row.status}`}>{row.status}</span>
                            
                        </TableCell>


                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    )
}