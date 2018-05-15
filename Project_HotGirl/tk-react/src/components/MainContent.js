import React,{Component} from 'react';
import GirlImage from './GirlImage';
class MainContent extends Component{
    render(){
        const allImages = this.props.images.map(img => <div className='col-3'  key={img._id}><GirlImage img={img}/></div>)
        return <div className="container"> <div className="row"> {allImages}</div></div>
    }
}
export default MainContent;