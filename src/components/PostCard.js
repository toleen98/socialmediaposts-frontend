import React from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react'



const PostCard = ({post}) => {
    const { name, avatar, title, description, likes_count, createdAt } = post;
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
                        <Button basic >
                            Like
                        </Button>
                        <Button basic >
                            Comment
                        </Button>
                    </div>
                </Card.Content>
            </Card>
       </div>
   )
};

export default PostCard;