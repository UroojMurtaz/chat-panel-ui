/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  return (
    <div
    //   ref={ref}
    //   className={`message ${message.senderId === currentUser.uid && "owner"}`}
        // eslint-disable-next-line react/prop-types
        className={`${message.sender === "me" ? "flex-row-reverse" :""} flex gap-4 mb-8`}
    >
      <div className="flex flex-col text-gray-500 font-light">
        <img
          //   src={
          //     message.senderId === currentUser.uid
          //       ? currentUser.photoURL
          //       : data.user.photoURL
          //   }
          className="w-10 h-10 rounded-full object-cover"
          src="https://source.unsplash.com/100x100/?avatar"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className={` max-w-[80%] flex flex-col gap-10`}>
        <p className={`${message.sender === "me" ? "bg-[#2e7d32] text-white rounded-l-lg p-4" :""}bg-slate-300 p-4 rounded-r-[10px] max-w-max`}>{message.text}</p>
        {/* <img className="w-1/2" src="https://source.unsplash.com/100x100/?avatar" alt="" /> */}
      </div>
    </div>
  );
};

export default Message;
