import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

                                             
function News() {

  const [value, setValue] = useState('');
  const [data, setData] = useState([]);                                                         
    
  const searching = (val) => {
      setValue(val.target.value);
   }
    
  const Api = () => {                           
    axios.get(
       `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2`
    ) 
        .then(response => {
            setData(response.data.articles);
        })  
        .catch(err => {
            setData(err);                
        })          
  }                                                              

   const handlerSubmit = () => {
        axios.get(
         `https://newsapi.org/v2/everything?q=${value}&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2`
            ) 
        .then(response => {
            setData(response.data.articles);
        })        
        .catch(err => {
            setData(err);         
        })
   }

    const berita = (e) => {
        e.preventDefault();
        handlerSubmit();
      }

   useEffect(() => {
    Api();
   }, []);
    
        
   return (
        <div>
          <h2 className='bg-dark text-white'>Berita Terkini</h2>
            <div className='container'>                                     
                <form action="" className='container' onSubmit={berita}>
                    <input 
                    className='mt-5' 
                    value={value}
                    onChange={searching}
                    type="text" 
                    placeholder='Search' 
                    />
                    <button className='btn btn-dark mt-2'>
                        Cari
                    </button>
                </form>
            </div>
            <div className='container mt-5'>
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

export default News;