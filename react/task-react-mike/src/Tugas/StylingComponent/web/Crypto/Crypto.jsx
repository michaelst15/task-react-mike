import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styleweb.css';

function Crypto() {
    const [data, setData] = useState([]);                                                         
    
  const Api = () => {                           
    axios.get(
       `https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2`
    ) 
        .then(response => {
            setData(response.data.articles);
        })  
        .catch(err => {
            setData(err);                
        })          
  }                                                              

   useEffect(() => {
    Api();
   }, []);
    
        
   return (
        <div>
          <h2 className='text-center mt-5 fw-bold'><i>Crypto</i></h2>
            <div className='mt-5'>
            {data.map( (data, index ) => {
                return(
                        <div key={index} className='container bg-dark text-white w-50'>
                                <img src={data.urlToImage} className='mt-3'></img>
                            <div className='artikel'>
                                <div>{data.title}</div>
                                <div>{data.publishedAt}</div>
                                <div>{data.description}</div>
                            </div>
                                <a href={data.url} className='btn btn-primary mt-2'>Read more</a>
                        </div>
                       )
                    })
                    }
            </div>
        </div>
           )
}
export default Crypto;