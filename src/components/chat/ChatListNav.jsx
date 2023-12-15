import React from "react";

const ChatListNav = () => {
  return (
    <div className="flex items-center bg-[rgba(95, 199, 110, 1)] h-16 p-2 justify-between text-white">
      {/* <span className="font-bold text-lg">OAP</span> */}
      <div className="flex items-center gap-3 justify-center ">
        <img
          //   src={currentUser.photoURL}
          className="bg-blue-200 h-10 w-10 rounded-full overflow-hidden border-2 border-white"
          src="https://source.unsplash.com/100x100/?avatar"
          alt=""
        />
        <span className="font-semibold">Urooj Murtaza</span>
      </div>
    </div>
  );
};

export default ChatListNav;
