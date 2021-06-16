import React from 'react'
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from 'antd';
import moment from 'moment';

const data = [
  {
    //actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    //actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

const Comments = () => {
  const { TextArea } = Input;
  return (
    <div>
        <List style = {{margin: 20, width:'auto'}}
          className="comment-list"
          //header={`${data.length} replies`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <li>
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        />
      
        <Form.Item>
          <TextArea rows={4} style={{margin: 10, width: 1300}}/>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit"  type="primary" style={{marginLeft: 20}}>
            Add Comment
          </Button>
        </Form.Item>
    
        
      
        
    </div>
  )
}

export default Comments;











  