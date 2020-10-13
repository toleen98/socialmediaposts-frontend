import React from 'react';
import { Comment } from 'semantic-ui-react';


const UserComment = ({comment}) => {
    const today = new Date().toString();
    const postDate = new Date(comment.date).toString();
        //get date 
        let date =  today.slice(0,10) === postDate.slice(0, 10) ?  'today':  postDate.slice(3, 10) ;
    return (
        <div>
            <Comment.Group>
    <Comment size='mini' >
      <Comment.Avatar  as='a' src={comment.avatar} />
      <Comment.Content >
        <div
        style={{
            backgroundColor:'#F2F3F5', 
            border:"1px solid #F2F3F5",  
            width:'50%', 
            padding:'5px 15px',
            borderRadius:' 40px ',
            fontSize:'small'
            } }
        >
            <Comment.Author> 
            {comment.name && comment.name.toUpperCase()} 
            <Comment.Metadata>
              <div>{date}</div>

            </Comment.Metadata>
            </Comment.Author>

            <Comment.Text>
              {comment.comment}
            </Comment.Text>
        </div>
        
        <Comment.Actions style={{paddingLeft:'15px'}} >
              <Comment.Action>Like</Comment.Action>
              <Comment.Action>Reply</Comment.Action>
              <Comment.Action>Hide</Comment.Action>
            </Comment.Actions>
      </Comment.Content>
      
    </Comment>
    
  </Comment.Group>
        </div>
    )
}

export default UserComment;