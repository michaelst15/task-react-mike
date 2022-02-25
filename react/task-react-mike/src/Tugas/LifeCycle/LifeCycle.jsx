import React, {Component} from 'react';
import axios from 'axios';
import './Style.css';


class LifeCycle extends Component {

   constructor() {
       super();
       this.state = {
           data: [],
           isLoading: true
       }
   }

    Api = () => {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-01-24&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2') 
        .then(response => {
            this.setState ({
           data: response.data.articles
            });
        })
        .catch(err => {
            this.setState ({
              err,
              isLoading: true
            });         
        })
    }

    componentDidMount() {
        this.Api();
    }
      
    render() {
        
        return (
            <div>
               <h2 className='bg-dark text-white'>Berita Terkini</h2>
               <input className='mt-5' type="text" placeholder='Seacrh' />
               <div className='container'>
                  {this.state.data.map((data) => {
                      return (
                          <div className='container'>
                            <div>{data.urlToImage}</div>,
                            <div>{data.title}</div>,
                            <div>{data.publishedAt}</div>,
                            <div>{data.description}</div>
                          </div>
                              )
                          })
                       }
               </div>
            </div>
        )
    }
        
}

export default LifeCycle;
