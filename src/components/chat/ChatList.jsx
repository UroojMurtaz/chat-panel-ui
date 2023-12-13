import ChatListNav from "./ChatListNav"
import Chats from "./Chats"
import Search from "./Search"

const ChatList = () => {
  return (
    <div className="bg-[#2e7d32] h-full">
      <ChatListNav/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default ChatList