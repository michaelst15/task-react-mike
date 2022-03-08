import React from 'react';
import Lpage from './NavBar/Img/Lpage.jpg';
import Navbar from './NavBar/Navbar';

function Header() {
        return (
          <div>
          <Navbar
           gambar={Lpage}
           button1="Home"        
           button2="Crypto" 
           button3="Tech"
           button4="Finance"
           title="Market Analyst"
           article="Pemasaran yang mencakup konsumen secara luas dengan jasa analisis yang 
           tepat
           Kami siap untuk menjadi solusi anda dalam membantu mendapatkan target pemasaran 
           yg sesuai keinginan anda"
           button5="Learn"
           />
          </div>
        )   
    }

export default Header;