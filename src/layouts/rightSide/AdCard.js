import React from 'react';
import {Card,Image} from 'semantic-ui-react'


const AdCard = () => {

    return (
        <div>
            <Card style={{display:'sticky'}}>
                
                <Card.Content>
                   <Card.Header>Sponserd</Card.Header>
                   <br/>
                    <Image width='100%' src='https://scontent.famm7-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/119671199_23845423466020170_6493715672562542550_n.jpg?_nc_cat=1&_nc_sid=67cdda&_nc_ohc=WflfMR9nqDgAX-555t2&_nc_ht=scontent.famm7-1.fna&oh=80c35894a6b82cc9ab32ee3eeca680cb&oe=5FACEDD6' wrapped ui={false} />  
                    <br/>  
                  <Card.Header>Chat privately with Hong Kong’s Top 8 Univer...</Card.Header>
                  
                  <Card.Description>
                    talkglobalstudy.com
                    alling all Middle Eastern students! Chat live online with experts from Hong Kong’s Top 8...
                  </Card.Description>
                  
                  
                </Card.Content>
                <Card.Content>
                   
                    <Image width='100%' src='https://scontent.famm7-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.155a/p296x100/120202221_6215399493278_3805186545000855935_n.jpg?_nc_cat=101&_nc_sid=86c3dc&efg=eyJxZV9ncm91cHMiOlsibm9fc2FmZV9pbWFnZV9mb3JfYWRzX2ltYWdlIl19&_nc_ohc=EUE-E-zCN0wAX8OjVZr&_nc_ht=scontent.famm7-1.fna&oh=0d89bc34ecf36c14815bc985c6375b50&oe=5FAC6B59' wrapped ui={false} />    
                    <br/>
                  <Card.Header>Chat privately with Hong Kong’s Top 8 Univer...</Card.Header>
                  
                  <Card.Description>
                    talkglobalstudy.com
                    alling all Middle Eastern students! Chat live online with experts from Hong Kong’s Top 8...
                  </Card.Description>
                  
                  
                </Card.Content>
                
               
            </Card>
        </div>
    ) 
}

export default AdCard;