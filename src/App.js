import React, {Component} from 'react';
import { BrowserRouter as  Router, Route  } from 'react-router-dom';
import Login from './features/Login';
import SignUp from './features/SignUp';
import PostingMain from './features/PostingMain';
import PostingList from './features/PostingList';
import PostingDetail from './features/PostingDetail';
import ApplicationMain from './features/ApplicationMain';
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
          <Route path='/main' component={PostingMain} />
          <Route path='/posts' exact component={PostingList} />
          <Route path='/posts/:id' exact component={PostingDetail} />
          <Route path='/appl' exact component={ApplicationMain} />
        </Router>
      </div>
    )
  }
}

export default App;
