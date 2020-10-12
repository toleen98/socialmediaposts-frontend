import React, { Component } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard'


class Posts extends Component {
    state = {
        posts:[]
    }

    componentDidMount() {
         axios
            .get(' http://localhost:8080/api/post/posts')
            .then( ( res) => {
               let data= res.data.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1);
               console.log(data)
                  this.setState({posts: data})
            })
    }

    render() {
        let { posts } = this.state;
        
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