import SingleChatMessages from "./SingleChatMessage"
import './scrollbar.css';

const ChatMessages = () => {
  const messages = [
    {
      text: "Hello!",
      time: "10:00 AM",
      sender: "me",
      id: 1,
      type: "text",
    },
    {
      // text: "Hello!",
      text: "",
      time: "10:00 AM",
      sender: "me",
      id: 1,
      type: "image",
      imageUrl: "https://source.unsplash.com/100x100/?avatar",
    },
    {
      text: "Hi there!",
      time: "10:05 AM",
      sender: "user2",
      id: 2,
    },
    {
      text: "How are you?",
      time: "10:10 AM",
      sender: "me",
      id: 3,
    },
    {
      text: "I'm good, thanks! How about you?",
      time: "10:15 AM",
      sender: "user2",
      id: 4,
    },
    {
      text: "I'm doing well too.",
      time: "10:20 AM",
      sender: "me",
      id: 5,
    },
    {
      text: "That's great to hear!",
      time: "10:25 AM",
      sender: "user2",
      id: 6,
    },
    {
      // text: "Hello!",
      text: "",
      time: "10:00 AM",
      sender: "me",
      id: 1,
      type: "file",
      fileName: "urooj.pdf",
    },
    {
      text: "What are you up to today?",
      time: "10:30 AM",
      sender: "me",
      id: 7,
    },
    {
      text: "Just working on some projects. How about you?",
      time: "10:35 AM",
      sender: "user2",
      id: 8,
    },
    {
      text: "Same here. Busy day!",
      time: "10:40 AM",
      sender: "me",
      id: 9,
    },
    {
      // text: "Hello!",
      text: "",
      time: "10:00 AM",
      sender: "other",
      id: 1,
      type: "video",
      videoUrl: "https://res.cloudinary.com/dhmolukeg/video/upload/v1667404379/samples/sea-turtle.mp4",
    },
    {
      text: "Tell me about it! Deadlines approaching.",
      time: "10:45 AM",
      sender: "user2",
      id: 10,
    },
    {
      text: "We got this! Let's finish strong.",
      time: "10:50 AM",
      sender: "me",
      id: 11,
    },
    {
      // text: "Hello!",
      text: "",
      time: "10:00 AM",
      sender: "me",
      id: 1,
      type: "video",
      videoUrl: "https://res.cloudinary.com/dhmolukeg/video/upload/v1667404379/samples/sea-turtle.mp4",
    },
    // Add more messages as needed
  ];
  
  
  return (
    <div className=" p-4 h-full h-[calc(100% - 160px)] overflow-y-scroll  custom-scrollbar"  style={{ scrollbarWidth: "thin", scrollbarColor: "#4CAF50 #FFFFFF" }}>
    {messages.map((m,index) => (
      <SingleChatMessages message={m} key={index} />
    ))}
  </div>
  )
}

export default ChatMessages