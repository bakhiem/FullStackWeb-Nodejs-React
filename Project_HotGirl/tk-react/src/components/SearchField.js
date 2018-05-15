import React,{Component} from 'react';

class SearchField extends Component{
    _onkeyuphandle = event => this.props._onkeyuphandle(event.target.value);
    render(){
        return (
            <form className="col-3">
                <input className="form-control" type="text" placeholder="Search" onKeyUp={this._onkeyuphandle}/>
            </form>
        );
    }
}

export default SearchField;