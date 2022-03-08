import {Router, Switch, Route} from 'react-router-dom';
import Navbar from '../Header/NavBar/Navbar';
import IndexTech from '../Tech/IndexTech';
import IndexCrypto from '../Crypto/IndexCrypto';
import IndexFinance from '../Finance/IndexFinance';
import MyWeb from '../Content/MyWeb';

const Index = () => {
    return(
      <div>
          <Router>
              <Navbar />
                <Switch>
                    <Route path='/MyWeb'>
                        <MyWeb /> 
                    </Route>  
                    <Route path='/IndexCrypto'>
                        <IndexCrypto />
                    </Route> 
                    <Route path='/IndexTech'>
                        <IndexTech />
                    </Route>
                    <Route path='/IndexFinance'>
                        <IndexFinance />
                    </Route>
                </Switch>
          </Router>
      </div>   
    )
}

export default Index;