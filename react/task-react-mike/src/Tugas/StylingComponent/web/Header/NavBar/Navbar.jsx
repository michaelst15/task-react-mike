import React, { Link } from 'react-router-dom';

const Navbar = ({gambar, button1, button2, button3, button4, button5, title, article}) => {
  return(
   <div>
       <img src={gambar} className="w-100" style={{height: 500}}/>
       <div className="mt-2" style={{marginLeft: 1000, position: "absolute", top: 10}}>
          <Link to="/MyWeb" className="btn btn-primary fw-bold" style={{marginRight: 10}}>{button1}</Link>
          <Link to="/IndexCrypto" className="btn btn-primary fw-bold" style={{marginRight: 10}}>{button2}</Link>
          <Link to="/IndexTech" className="btn btn-primary fw-bold" style={{marginRight: 10}}>{button3}</Link>
          <Link to="/IndexFinance" className="btn btn-primary fw-bold" style={{marginRight: 10}}>{button4}</Link>
       </div> 
       <div className="container">
         <div style={{position: "absolute", top: 80, color: "white", width: 400, fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
            <h2>{title}</h2>  
             <p>{article}</p>   
              <button className="btn btn-primary fw-bold">{button5}</button>
         </div>
       </div>
   </div>
   )
}

export default Navbar;