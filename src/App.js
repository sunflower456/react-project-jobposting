import React, {Component} from 'react';
import { BrowserRouter as  Router, Route  } from 'react-router-dom';
import Login from './features/counter/Login';
import SignUp from './features/counter/SignUp';
import PostingMain from './features/counter/PostingMain';
import PostingList from './features/counter/PostingList';
import PostingDetail from './features/counter/PostingDetail';
import ApplicationMain from './features/counter/ApplicationMain';
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
