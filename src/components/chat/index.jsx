import React from 'react'
import ChatBody from './ChatBody'
import ChatList from './ChatList'

const index = () => {
  return (
    <div className="flex h-screen">
  {/* Chat List Section */}
  <div className="w-1/4 bg-gray-200">
    {/* Your chat list content goes here */}
    <ChatList />
  </div>

  {/* Chat Messages Panel Section */}
  <div className="w-3/4 bg-white">
    {/* Your chat messages panel content goes here */}
    <ChatBody />
  </div>
</div>

  )
}

export default index