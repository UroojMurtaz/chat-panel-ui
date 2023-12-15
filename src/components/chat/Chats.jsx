import { useState } from "react";
import './scrollbar.css';

const Chats = () => {
  const [chats, setChats] = useState([
    {
      userInfo: {
        displayName: "John Doe",
        displayImg: "https://picsum.photos/200",
        online: true,
        time: "3:43 PM",
      },
      lastMessage: {
        text: "Am fine what about you ?",
        date: new Date(),
      },
    },
    
    {
      userInfo: {
        displayName: "Sara William",
        displayImg: "https://picsum.photos/200",
        online: true,
        time: "12:10 PM",
      },
      lastMessage: {
        text: "Helo sir, today am not available",
        date: new Date(),
      },
    },
    {
      userInfo: {
        displayName: "Taylor William",
        displayImg: "https://picsum.photos/200",
        online: true,
        time: "12:10 PM",
      },
      lastMessage: {
        text: "Helo sir, today am not availableHelo sir, today am not available",
        date: new Date(),
      },
    },
    {
      userInfo: {
        displayName: "Taylor William",
        displayImg: "https://picsum.photos/200",
        online: true,
        time: "12:10 PM",
      },
      lastMessage: {
        text: "Helo sir, today am not availableHelo sir, today am not available",
        date: new Date(),
      },
    },
    {
      userInfo: {
        displayName: "Taylor William",
        displayImg: "https://picsum.photos/200",
        online: true,
        time: "12:10 PM",
      },
      lastMessage: {
        text: "Helo sir, today am not availableHelo sir, today am not available",
        date: new Date(),
      },
    },
    
  
  ]);
  return (
    <div className="chats-scrollbar overflow-y-auto flex-shrink-0" style={{ maxHeight: 'calc(100vh - 100px)' }}>
  {Object.entries(chats)
    ?.sort((a, b) => b[1].date - a[1].date)
    .map(([chatId, chat]) => (
      <div
        className="p-4 flex items-center gap-3 text-white cursor-pointer hover:bg-[#51995b]"
        key={chatId}
        // onClick={() => handleSelect(chat.userInfo)}
      >
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://picsum.photos/200"
          alt=""
        />
        <div className="userChatInfo">
          <span className="text-md font-semibold">
            {chat.userInfo.displayName}
          </span>
          <div className="w-40">
            <p className="text-sm text-lightgray overflow-hidden whitespace-nowrap overflow-ellipsis">
              {chat.lastMessage?.text}
            </p>
          </div>
        </div>
        <div className="ml-auto text-lightgray text-[0.7rem] font-semibold">
          {chat.userInfo?.time}
        </div>
      </div>
    ))}
</div>

  );
};

export default Chats;
