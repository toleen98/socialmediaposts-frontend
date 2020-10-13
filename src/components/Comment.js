import React from 'react';
import { Comment } from 'semantic-ui-react';


const UserComment = ({comment}) => {

    return (
        <div>
            <Comment.Group>
    <Comment >
      <Comment.Avatar  as='a' src={comment.avatar} />
      <Comment.Content >
        <div>
            <Comment.Author> 
            {comment.name} 
            <Comment.Metadata>
              <div>{comment.date}</div>

            </Comment.Metadata>
            </Comment.Author>

            <Comment.Text>
              {comment.comment}
            </Comment.Text>
        </div>
        <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
      </Comment.Content>
      
    </Comment>
    <hr/>
  </Comment.Group>
        </div>
    )
}

export default UserComment;