import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import HomeScreen from './containers/HomeScreen';
import DetailScreen from './containers/DetailScreen';
import axios from './axios';


class App extends Component {
  state={}
  _onlogin = () =>{
    axios.post('/api/auth',{
      username:'admin',
      password:'123456'
    })
    .then(res =>{
      console.log(res);
      this.setState({
        username:res.data.username,
        id:res.data.id
      })
    })
    .catch(err => console.error(err));
  }
  render() {
   return (
      <div className="App">
         <HomeScreen _onlogin={this._onlogin}
            username={this.state.username}
         />
      </div>
    );
  }
}

export default App;
