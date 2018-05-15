import React,{Component} from 'react';
import GirlImage from '../components/GirlImage';
import NavBar from '../components/NavBar';
import axios from '../axios';
class DetailScreen extends Component{
    state ={
      };
      componentDidMount(){
        axios.get("/api/images/5ad79ee3562f1b0a7193ca07")
        .then(data => {
         console.log(data);
          this.setState({image : data.data});
        })
        .catch(err => console.log(err));
      }
    render(){
        return (
            <div>
            <NavBar 
            _onkeyuphandle={this._onkeyuphandle} 
            _onlogin={this._onlogin} 
            username={this.state.username}
            />
            <div className='main_content container'>
                <div className="row">
                    <div className="col-8 mr-auto ml-auto">
                        {this.state.image ? <GirlImage img={this.state.image}/> : ''}
                    </div>
                </div>
                
            </div>
            </div>
        );
    }
}

export default DetailScreen;