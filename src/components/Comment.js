import React from 'react';
import { Comment } from 'semantic-ui-react';


const UserComment = ({comment}) => {

    return (
        <div>
            <Comment>
                <Comment.Avatar as='a' src={comment.avatar} />
                <Comment.Content>
                    <Comment.Author as='a'>{comment.user}</Comment.Author>
                    <Comment.Metadata>
                        <span>{comment.date}</span>
                    </Comment.Metadata>
                    <Comment.Text>{comment.text}</Comment.Text>
                </Comment.Content>
          </Comment>
        </div>
    )
}

export default UserComment;