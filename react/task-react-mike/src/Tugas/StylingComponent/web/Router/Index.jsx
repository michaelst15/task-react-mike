import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Crypto from './Tugas/StylingComponent/web/Crypto/'

const Index = () => {
    return(
      <div>
          <Router>
              <Switch>
                  <Route path='/Crypto'>
                      <Crypto />
                  </Route>
              </Switch>
          </Router>
      </div>   
    )
}

export default Index;