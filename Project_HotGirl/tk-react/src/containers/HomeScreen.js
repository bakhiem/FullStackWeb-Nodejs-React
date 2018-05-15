import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import axios from '../axios';
import MainContent from '../components/MainContent';



class HomeScreen extends Component {
  state ={
    images :[],
    searchText : ''
 
  };
  componentDidMount(){
    axios.get("/api/images")
    .then(data => {
      console.log(data);
      this.setState({images : data.data});
    })
    .catch(err => console.log(err));
  }
  _onkeyuphandle = (e) =>{
    this.setState({searchText : e});
  }
  
  render() {
    const displayImages = this.state.images.filter(img => img.title.includes(this.state.searchText) || img.description.includes(this.state.searchText))
    return (
      <div>
          <NavBar 
          _onkeyuphandle={this._onkeyuphandle} 
          _onlogin={this.props._onlogin} 
          username={this.props.username}
          />
         <MainContent images={displayImages}/>
      </div>
    );
  }
}

export default HomeScreen;
