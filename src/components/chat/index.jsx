import ChatBody from "./ChatBody";
import ChatList from "./ChatList";

const index = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200">
        <ChatList />
      </div>

      <div className="w-3/4 bg-white">
        <ChatBody />
      </div>
    </div>
  );
};

export default index;
