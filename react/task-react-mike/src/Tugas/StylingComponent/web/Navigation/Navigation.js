 import {Link} from 'react-router-dom';
 import Lpage from './Img/Lpage.jpg';
 import React from 'react';

 const Navbar = ({gambar, title, article, button1, button2, button3, button4, buttonArticle}) => {
    return( 
     <div>
       <img src={gambar} className="w-100" style={{height: 500}}/>
         <div className="mt-2" style={{marginLeft: 1000, position: "absolute", top: 10}}>
          <Link className="btn btn-primary fw-bold" style={{marginRight: 10}}>{button1}</Link>
          <Link className="btn btn-primary fw-bold" style={{marginRight: 10}}>{button2}</Link>
          <Link className="btn btn-primary fw-bold" style={{marginRight: 10}}>{button3}</Link>
          <Link className="btn btn-primary fw-bold" style={{marginRight: 10}}>{button4}</Link>
         </div> 
         <div className="container">  
           <div style={{position: "absolute", top: 80, color: "white", width: 400, fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
              <h2>{title}</h2>  
               <p>{article}</p>   
                <button className="btn btn-primary fw-bold">{buttonArticle}</button>
           </div>
         </div>
     </div>
     )
   }

 function Navigation() {
     return(
        <div>
        <Navbar
         gambar={Lpage}
         title="Market Analyst"
         button1='Home'
         button2='Crypto'
         button3='Tech'
         button4='Finance'
         article="Pemasaran yang mencakup konsumen secara luas dengan jasa analisis yang 
         tepat
         Kami siap untuk menjadi solusi anda dalam membantu mendapatkan target pemasaran 
         yg sesuai keinginan anda"
         buttonArticle="Learn"
         />
        </div>
     )
 }

 export default Navigation;