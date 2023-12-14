import { useState } from "react";

const Chats = () => {
  const [chats, setChats] = useState([
    {
      userInfo: {
        displayName: "John Doe",
        displayImg: "https://picsum.photos/200",
        online: true,
        time: "3:43PM",
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
        time: "12:10PM",
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
        time: "12:10PM",
      },
      lastMessage: {
        text: "Helo sir, today am not availableHelo sir, today am not available",
        date: new Date(),
      },
    },
  ]);
  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <>
            <div
              className="p-4 flex items-center gap-3 text-white cursor-pointer hover:bg-[#1b5e20]"
              key={chat[0]}
              // onClick={() => handleSelect(chat[1].userInfo)}
            >
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://picsum.photos/200"
                alt=""
              />
              <div className="userChatInfo">
                <span className="text-lg font-semibold">
                  {chat[1].userInfo.displayName}
                </span>
                <div className="w-48">
                  <p className="text-sm text-lightgray overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {chat[1].lastMessage?.text}
                  </p>
                </div>
              </div>
              <div className="ml-auto text-lightgray text-[0.7rem]">
                {/* Your time goes here, replace 'chat[1].lastMessage.time' with the actual property name for time in your data */}
                {chat[1].userInfo?.time}
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Chats;
