import React, { Component } from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class CommentInput extends Component {
    state = {
        comment: '',
        post_id :this.props.postData._id,
        
    }

    changeHndler = (e) => {
        console.log(e.target.value)
        this.setState({ [e.target.id]: e.target.value });
    }
    comment = () => {
       
        const comment = {
            name: this.props.auth.user.name, 
            comment:this.state.comment,
            user_id:this.props.auth.user.id,
            avatar:this.props.auth.user.avatar
        }
        
        console.log(comment)
      axios
      .put('http://localhost:8080/api/post/addComment',{_id: this.state.post_id, comment:comment})
      .then(res => {
          console.log(res)
      })
    }
    render() {
        return (
            <div>
            

<InputGroup className="mb-3" size="sm">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      id='comment' 
      onChange = {this.changeHndler}
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2" onClick={this.comment}>Comment</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
            
            </div>
        );
    }

}

CommentInput.propTypes = {
    
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps
    )(CommentInput);

