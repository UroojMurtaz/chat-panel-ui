/* eslint-disable react/prop-types */
import React from "react";

const Message = ({ message }) => {
  // ImageMessage.jsx
  const ImageMessage = ({ imageUrl }) => (
    <div
      className="border border-gray-300 rounded-lg w-40 h-40 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );

  // VideoMessage.jsx
  const VideoMessage = ({ videoUrl }) => (
    <div className="relative border border-gray-300 rounded-lg w-40 h-40">
      <video className="w-full h-full object-cover" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

  // FileMessage.jsx
  const FileMessage = ({ fileName }) => (
    <div className=" border border-gray-300 rounded-lg w-40 h-25 bg-gray-100 flex items-center justify-center">
      <div className="text-gray-600 text-center">
        {/* Add an appropriate file icon or type indicator */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-gray-400 mb-2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>

        {/* Display the file name */}
        <p className="truncate">{fileName}</p>
      </div>
    </div>
  );
  return (
    <div
      //   ref={ref}
      //   className={`message ${message.senderId === currentUser.uid && "owner"}`}
      // eslint-disable-next-line react/prop-types
      className={`${
        message.sender === "me" ? "flex-row-reverse" : ""
      } flex gap-4 mb-8`}
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
        <span className="text-[0.7rem] font-semibold mt-1">
          {message?.time}
        </span>
      </div>
      {message.text !== "" && (
        <div className={`max-w-[50%] flex flex-col gap-6`}>
          <div
            className={`relative ${
              message.sender === "me" ? "text-white" : ""
            }`}
          >
            <p
              className={`${
                message.sender === "me"
                  ? "bg-[#5fc76e] rounded-lg p-3"
                  : "bg-gray-300 rounded-lg p-3"
              } max-w-max relative`}
            >
              {message.text}
            </p>

            <div
              className={`absolute top-0 ${
                message.sender === "me" ? "right-0" : "left-0"
              } w-0 h-0 border-solid border-t ${
                message.sender === "me"
                  ? "border-[#5fc76e]"
                  : "border-slate-300"
              } border-l transparent border-4`}
            ></div>
          </div>
        </div>
      )}

      {message.type === "image" && <ImageMessage imageUrl={message.imageUrl} />}
      {message.type === "video" && <VideoMessage videoUrl={message.videoUrl} />}
      {message.type === "file" && <FileMessage fileName={message.fileName} />}
    </div>
  );
};

export default Message;
