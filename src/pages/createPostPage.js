import React,{Component} from 'react';
import { Form, Icon } from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import storage  from '../firebase/firebase-config';

const fileInputRef = React.createRef();


class CreatePost extends Component {
    state = {
        title : '',
        description:'',
        firebaseImage: '',
        firebaseVideo:'',
        imgUploaded:false
        // name: this.props.auth.user.name ,
    }
     that = this;
   componentDidUpdate(type){
       if (!this.state.imgUploaded && type === 'img'){
            this.setState({
                imgUploaded:true
            });
        }
        if (!this.state.imgUploaded && type === 'vedio'){
            this.setState({
                imgUploaded:true
            });
        }
   }

    onChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };

    uploadImage = (e) => {
        console.log(e)
        let currentImageName = "firebase-image-" + Date.now();

      let uploadImage = storage.ref(`images/${currentImageName}`).put(e.target.files[0]);

      uploadImage.on('state_changed',
        (snapshot) => { },
        (error) => {
          alert(error);
        },
         () => {
          storage.ref('images').child(currentImageName).getDownloadURL().then(  (url) => {
                 this.setState({firebaseImage: url});
                this.componentDidUpdate('img');
            })
        })
        
            
    }

    onPost = e => {
        console.log(this.state);
        // axios
        //     .post(' http://localhost:8080/api/post/createpost',{title: this.state.title, description:this.state.description, name: this.props.auth.user.name })
        // .then(json => {
        //  console.log(json)
        // })
        
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
                        
                        <Icon size='large' name='video camera' onClick={() => fileInputRef.current.click()}/>
                        <input ref={fileInputRef} type='file' onChange={(e) => this.uploadImage(e)} style={{display:'none'}}/>
                        {this.state.imgUploaded && <img src={this.state.firebaseImg} alt='upload_img'/>  } 
                        

                        
                        
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