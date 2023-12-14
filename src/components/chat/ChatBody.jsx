import React from 'react'
import ChatBodyHeader from './ChatBodyHeader'
import Messages from './Messages'

const chatBody = () => {
  return (
    <>
    <ChatBodyHeader/>
    <div className='h-full'>
        <Messages/>
    </div>
    </>
  )
}

export default chatBody