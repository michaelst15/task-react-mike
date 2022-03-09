import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Styleweb.css';

function Crypto() {
    const [data, setData] = useState([]);


const Api = () => {
    axios.get(
        'https://newsapi.org/v2/everything?q=crypto&from=2022-02-07&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2'
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
    <div className='container'>
      {data.map((data) => {
          return(
              <div className='container text-white'>
                <img src={data.urlToImage} className='mt-4'></img>
                <div>{data.title}</div>
                <div>{data.publishedAt}</div>
                <div>{data.description}</div>
              </div>   
          )
      })}
    </div>
  )
}
export default Crypto;