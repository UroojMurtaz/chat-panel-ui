import { useState } from "react";
import {
  SendOutlined,
  PaperClipOutlined,
  PictureOutlined,
  FileAddOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";

const ChatInput = () => {
  const [text, setText] = useState();

  const [showButtons, setShowButtons] = useState(false);

  const [msg, setMsg] = useState("");

  return (
    <div className="flex item-center justify-center  w-full p-2 shadow-lg mt-1">
      <Input
        placeholder="Type Your Message"
        className="md:ml-[18px] lg:ml-[18px] ml:[15px] rounded-[20px] h-[40px] w-full mb-[10px] "
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        //   onPressEnter={sendmsg}
      ></Input>
      {/* <Input style={{ width: '300px',marginBottom:'25px' }}></Input> */}
      <div className="flex">
        <Button
          className="rounded-full text-black w-[40px] h-[40px] cursor-pointer bg-[#6EE17E] ml-[3px] flex justify-center items-center"
          //   onClick={sendmsg}
        >
          <SendOutlined className="text-white" />
        </Button>
        <Button
          className=" border border-gray-300 rounded-full text-black w-10 h-10 cursor-pointer bg-white ml-2 flex justify-center items-center shadow-md"
          // onClick={handleButtonClick}
          onClick={() => setShowButtons(!showButtons)}
        >
          <PaperClipOutlined className="iconeatach" />
        </Button>
      </div>
      {showButtons && (
        <div className="absolute top-[60%] right-1 z-50 bg-transparent border-none rounded-5 p-2 flex flex-col space-y-3">
          <div className="w-12 h-12 border border-gray-300 rounded-full text-black flex justify-center items-center cursor-pointer bg-white">
            <label htmlFor="file-image">
              <PictureOutlined className="iconeatach" />
            </label>
            <input
              id="file-image"
              style={{ display: "none" }}
              accept="image/*"
              // onInput={handleChange("image")}
              type="file"
            />
          </div>
          <div className="w-12 h-12 border border-gray-300 rounded-full text-black flex justify-center items-center cursor-pointer bg-white">
            <label htmlFor="file-video">
              <PlaySquareOutlined className="iconeatach" />
            </label>
            <input
              id="file-video"
              style={{ display: "none" }}
              accept="video/*"
              // onInput={handleChange("video")}
              type="file"
            />
          </div>
          <div className="w-12 h-12 border border-gray-300 rounded-full text-black flex justify-center items-center cursor-pointer bg-white">
            <label htmlFor="file-doc">
              <FileAddOutlined className="iconeatach" />
            </label>
            <input
              id="file-doc"
              style={{ display: "none" }}
              accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf"
              // onInput={handleChange("file")}
              type="file"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
