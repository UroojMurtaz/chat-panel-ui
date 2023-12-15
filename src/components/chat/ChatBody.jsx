import React from 'react'
import ChatBodyHeader from './ChatBodyHeader'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

const chatBody = () => {
  return (
    <div className="flex flex-col h-screen">
    {/* Fixed Header */}
    <ChatBodyHeader />
  
    {/* Scrollable Body */}
    <div className="flex-1 overflow-y-auto bg-gray-100">
      <ChatMessages />
    </div>
  
    {/* Fixed Footer */}
    <ChatInput />
  </div>
  
  )
}

export default chatBody