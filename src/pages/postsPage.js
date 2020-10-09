import React, { Component } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard'


class Posts extends Component {
    state = {
        posts:[]
    }

    componentDidMount() {
        console.log('hi')
         axios
            .get(' http://localhost:8080/api/post/posts')
            .then( ( res) => {
                console.log(res.data)
                  this.setState({posts: res.data})
            })
    }
    render() {
        let { posts } = this.state;
        console.log(posts)
        return(
            <div>
                <h2>Posts</h2>
                {
                    posts.map(post => {
                        return (
                            <PostCard post={post} key={post._id}/>
                        )
                    })
                }
                
            </div>
        )
    }
}

export default Posts;