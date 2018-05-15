import React,{Component} from 'react';
import config from '../config';
class GirlImage extends Component{
    render(){
        const comment = this.props.img.comment ? this.props.img.comment.map(comment => (
        <p>
            <span className="font-weight-bold">
                {comment.createdBy.username}
            </span>:{" "}{comment.content}
        </p>
    ))
     :"";
        return (
            <div className='text-center'>
                <img className='img-fluid' src={config.rootPath + this.props.img.imageUrl} alt={this.props.img.title}/>
                <h4>{this.props.img.title}</h4>
                <p>{this.props.img.description}</p>
                {comment}
            </div>
        );
    }
}
export default GirlImage;