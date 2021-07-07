import React, {Component} from 'react';
import { BrowserRouter as  Router, Route  } from 'react-router-dom';
import Login from './features/counter/Login';
import SignUp from './features/counter/SignUp';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
  }
  render(){
    return (
      <div>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/signup' component={SignUp} />
        </Router>
      </div>
    )
  }
}

export default App;
