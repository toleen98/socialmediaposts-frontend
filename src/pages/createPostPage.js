import React,{Component} from 'react';
import { Form, Icon } from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class CreatePost extends Component {
    state = {
        title : '',
        description:''

    }

    onChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };

    onPost = e => {
        console.log(this.state);
        
        axios
            .post(' http://localhost:8080/api/post/createpost',{title: this.state.title, description:this.state.description, name: this.props.auth.user.name })
        .then(json => {
         console.log(json)
        })
        
    }

    render() {
        return(
            <div>
                <h2>Create Post</h2>
                <Form>
                    <Form.Input 
                    label='Post Title' 
                    placeholder='New post title ...' 
                    name = 'title'
                    onChange={this.onChange}   
                    />
                    <Form.TextArea 
                    label='Description' 
                    placeholder='Write your post content ...' 
                    name='description' 
                    onChange={this.onChange} 
                    style={{height:'100px'}}
                    />
                    <br/>
                    <Form.Group>
                        <span>Add Image/video </span>
                        <Icon size='large' name='camera'/>
                        <Icon size='large' name='video camera'/>
                    </Form.Group>
                   
                    <Form.Button onClick={this.onPost}>Post</Form.Button>
        
                </Form>

            </div>
        )
    }
}

CreatePost.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(CreatePost);