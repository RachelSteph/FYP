import React from 'react'
import  { Input } from 'antd';

const Comments = () => {
  const { TextArea } = Input;
  return (
    <div>
        <TextArea rows={4} />
    </div>
  )
}

export default Comments;
