import React from 'react';
import List from '../../containers/list';
import Detail from '../../containers/Detail';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'; 

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={List}>
            
          </Route>
          <Route exact path="/detail/:id" component={Detail}>
            
          </Route>
          
        </Switch>
    
      </Router>
    </div>
  );
}
