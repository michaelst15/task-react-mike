import React from 'react';
import Lpage from './NavBar/Img/Lpage.jpg';
import Jumbotron from './NavBar/Jumbotron';

class Header extends React.Component {
    render() {
        return (
          <div>
            <Jumbotron
           gambar={Lpage}
           button1="Home"
           button2="info"
           button3="Analyst"
           button4="Prospect"
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
} 

export default Header;