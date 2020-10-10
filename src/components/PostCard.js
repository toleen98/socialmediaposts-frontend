import React, { Component } from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class PostCard extends Component {
    constructor (props){
        super(props)
        this.state = {
            post : this.props.post,
            likes_count : this.props.post.likes_count
        }
    }
    componentDidUpdate() {
        axios
            .put(' http://localhost:8080/api/post/updatepostLikesCount',{_id: this.state.post._id,likes_count:this.state.likes_count })
            .then(json => {
             this.setState({post : json.data})
            })
      }

    likePost = async (e) => {
      e.preventDefault();
      if (this.props.auth.isAuthenticated) {
            console.log(1)
            await this.setState({likes_count : this.state.likes_count + 1});

             this.componentDidUpdate();

            
        }
        else {
            alert('You need to login')
        }

    }


    render(){
        const { name, avatar, title, description, likes_count, createdAt } = this.state.post;
        const today = new Date().toString();
        const postDate = new Date(createdAt).toString();

        //get date 
        let date =  today.slice(0,10) === postDate.slice(0, 10) ?  'today':  postDate.slice(3, 10) ;

        return (
            <div style={{marginBottom:'10px'}}>
                 <Card style={{width:'auto'}}>
                     <Card.Content > 
                         <Image
                         floated='left'
                         size='mini'
                         src={avatar}
                         />
                         <Card.Meta>{ name.toUpperCase() }</Card.Meta>
                         <Card.Meta>{ date }</Card.Meta>
                         <br/>
                         <Card.Header>{ title.toUpperCase() }</Card.Header>
                         <Card.Description>
                             { description }
                         </Card.Description>
                         <br/>
                         <div>
                         <Card.Meta><Icon disabled name='like' /> { likes_count }</Card.Meta>
                         </div>
                     </Card.Content>
                     <Card.Content extra>
                         <div className='ui two buttons'>
                             <Button basic  onClick={this.likePost}>
                                 Like
                             </Button>
                             <Button basic >
                                 Comment
                             </Button>
                         </div>
                     </Card.Content>
                 </Card>
            </div>
        );
    }
};

PostCard.propTypes = {
    
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps
    )(PostCard);