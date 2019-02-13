import React from 'react';
import {connect} from 'react-redux';

import {getPosts} from '../actions';



class Posts extends React.Component {

    state= {
        posts: []
    };

    componentDidMount() {
        this.props.getPosts();
    }


    render() {
        return (
            <div className="SmurfList">
                {this.props.posts.map((post) => (
                    <div className="IndvPost" key={this.props.posts.id}>
                        
                        <p className="Quote">{post.title}</p>
                        <p className="Person">{post.contents}</p>
                       
                        
                    </div>
                
                ))}
            </div>
        )
    };

}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(
    mapStateToProps,
    {getPosts}
)(Posts);