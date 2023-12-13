import React from 'react'

const ChatCard = () => {
    const onlineIndicatorColor = conv.online ? 'text-green-500' : 'text-gray-500';
  return (
    <button
      style={{ borderRadius: '4px' }}
      className={`${
        activeChat?.id === conv?.id ? 'bg-blue-200' : 'bg-white'
      } p-4 flex items-center justify-between space-x-4`}
    //   onClick={() => setActiveChat(conv)}
    >
      <div className="flex items-center space-x-4">
        <div className={`relative ${onlineIndicatorColor}`}>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
            //   src={displayUser.profileImage[0]?.path}
            src="https://source.unsplash.com/100x100/?avatar"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-1/2 -left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-white rounded-full border border-white" />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">{`${displayUser.firstName} ${displayUser.lastName}`}</p>
          <p className={`text-xs mt-1 ${onlineIndicatorColor}`}>
            {conv.latestMessage === null ? '' : conv.latestMessage?.type === 'text' ? conv.latestMessage?.content : 'Image'}
          </p>
        </div>
      </div>
      {/* <p className={`${classes.chatCardTime} text-xs`}>{conv.latestMessage === null ? '' : calculateFormattedTime(conv.latestMessage.createdAt)}</p> */}
    </button>
  )
}

export default ChatCard