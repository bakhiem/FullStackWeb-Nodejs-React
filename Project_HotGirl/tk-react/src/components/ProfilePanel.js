import React,{Component} from 'react';

class ProfilePanel extends Component{
 
    render(){
        const display = this.props.username ? 
        (<div className="col-3 profile_panel">
                Welcome,{this.props.username}
        </div>)
        :
        (<div className="col-3 profile_panel">
            <button className="btn btn-primary" onClick={this.props._onlogin}>Login</button>
        </div>)
        return(
            <div>{display}</div>
        );
    }
}
export default ProfilePanel;