import ChatListNav from "./ChatListNav"
import Chats from "./Chats"
import Search from "./Search"

const ChatList = () => {
  return (
    <div className="bg-[#5fc76e] h-full">
      <ChatListNav/>
      <hr/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default ChatList