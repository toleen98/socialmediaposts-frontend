import React,{Component} from 'react';
import axios from 'axios';
import { Button, Card, Image } from 'semantic-ui-react'


class Posts extends Component {
    state = {
        posts:[]
    }

    componentDidMount() {
        console.log('hi')
        axios
            .get(' http://localhost:8080/api/post/posts')
            .then(res => {
                console.log(res.data)
            })
    }
    render() {
        return(
            <div>
                post
            </div>
        )
    }
}

export default Posts;