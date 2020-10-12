import React, { Component } from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Player } from 'video-react';


class PostCard extends Component {
    constructor (props){
        super(props)
        this.state = {
            post : this.props.post,
            likes_count : this.props.post.likes_count,
            liked_users: this.props.post.liked_users
        }
    }
    componentDidUpdate() {
        axios
            .put(' http://localhost:8080/api/post/updatepostLikesCount',{_id: this.state.post._id,likes_count:this.state.likes_count,liked_users: this.state.liked_users })
            .then(json => {
                console.log(json)
             this.setState({post : json.data})
            })
      }

    likePostToggle = async (e) => {
      e.preventDefault();
      if (this.props.auth.isAuthenticated) {
          let likes_count = this.state.likes_count;
          let liked_users= this.props.post.liked_users;

          if (liked_users.includes(this.props.auth.user.id)){
              likes_count--;
              let index = liked_users.indexOf(this.props.auth.user.id);
              liked_users.splice(index,1);
          }
          else {
              likes_count++
              liked_users.push(this.props.auth.user.id)
          }
            console.log(1)
            await this.setState({ likes_count,liked_users });

             this.componentDidUpdate();

            
        }
        else {
            alert('You need to login')
        }

    }


    render(){
        const { name, avatar, title, description, likes_count, createdAt, imgUrl, videoUrl } = this.state.post;
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
                             <br/>
                             {imgUrl && <img src={imgUrl} alt='img' style={{width:'auto'}}/>}
                             {videoUrl && <Player><source src={videoUrl} /></Player> }
                         </Card.Description>
                         <br/>
                         <div>
                         <Card.Meta ><Icon circular inverted name='like' size='small'  color={this.state.liked_users.includes(this.props.auth.user.id) ? 'red' : 'grey'} /> { likes_count }</Card.Meta>
                         </div>
                     </Card.Content>
                     <Card.Content extra>
                         <div className='ui two buttons'>
                             <Button basic  onClick={this.likePostToggle}>
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