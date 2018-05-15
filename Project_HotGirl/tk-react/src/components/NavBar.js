import React, {Component} from 'react';
import SearchField from './SearchField';
import logo from '../img/Logo.png';
import ProfilePanel from './ProfilePanel';
class NavBar extends Component {
    render(){
        return (
            <div className="navbar">
                <div className="container">
                        <SearchField _onkeyuphandle={this.props._onkeyuphandle}/>
                        <div className="col-6 text-center">
                            <img src={logo}/>
                        </div>
                        <ProfilePanel _onlogin={this.props._onlogin} username={this.props.username}/>
                </div>
            </div>
        );
    }
}
export default NavBar;