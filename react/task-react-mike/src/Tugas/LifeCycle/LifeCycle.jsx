import React, {Component} from 'react';
import axios from 'axios';
import './Style.css';


class LifeCycle extends Component {

   constructor() {
       super();   
       this.state = {
           search: '',
           data: []
       }
   }

   searching = (val) => {
      this.setState({search: val.target.value});
   }
 
    Api = () => {
    axios.get(
        `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2`
    ) 
        .then(response => {
            this.setState ({
           data: response.data.articles
            }
            );
        })
        .catch(err => {
            this.setState ({
              err
            });                
        })
    }

    // handlerSubmit = (e) => {
    //     e.preventDefault();
    //     axios.get(
    //      `https://newsapi.org/v2/everything?q=${this.state.search}&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2`
    //         ) 
    //     .then(response => {
    //         this.setState ({
    //        data: response.data.articles
    //         });
    //     })        
    //     .catch(err => {
    //         this.setState ({
    //           err
    //         });         
    //     })
    // }

    componentDidMount() {
        this.Api();
    }
                
    render() {
         
        return (
            <div>
               <h2 className='bg-dark text-white'>Berita Terkini</h2>
               <div className='container'>
               <input 
               className='mt-5' 
               value={this.state.search}
               type="text" 
               placeholder='Search' />
               <button 
               className='btn btn-dark mt-2' 
               onChange={this.handlerSubmit}>
                   Cari
               </button>
               </div>
               <div className='container mt-5'>
                  {this.state.data.map((data) => {
                      return (
                          <div className='container bg-dark text-white w-50'>
                            <img src={data.urlToImage} className='mt-3'></img>
                                <div className='artikel'>
                                <div>{data.title}</div>
                                <div>{data.publishedAt}</div>
                                <div>{data.description}</div>
                            </div>
                                <button className='btn btn-primary mt-2'>Read more</button>
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
