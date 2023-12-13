
import { Avatar, Badge,  } from "antd";
import { SearchOutlined,MoreOutlined } from "@ant-design/icons";
const ChatBodyHeader = () => {
  const activeChat = {
    online: true,
  };
  return (
    <div>
      <div className="p-4 border-t-4 border-gray-300 rounded-tr-2xl shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Badge
                dot
                color="green"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  marginTop: "0.3rem",
                  marginRight: "0.5rem",
                  height: "0.5rem",
                  width: "0.5rem",
                }}
              >
                <Avatar shape="circle" src="https://source.unsplash.com/100x100/?avatar" className="w-11 h-11" />
              </Badge>
            </div>
            <div>
              <p className="text-sm font-semibold cursor-pointer">
                {"Urooj" + " " + "Murtaza"}
              </p>
              <p
                className={`text-xs ${
                  activeChat.online ? "text-green-500" : "text-gray-500"
                }`}
              >
                {activeChat.online ? "Active Now" : "Offline"}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
          <SearchOutlined className="text-lg" />
          <MoreOutlined className="text-lg font-bold"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBodyHeader;
