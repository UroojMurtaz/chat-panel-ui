import {useState} from 'react'
import Message from './Message';

const Messages = () => {
    const [messages, setMessages] = useState([{
        text:"Hello",
        date: new Date(),
        sender: "me",
        id: 1
    },{
      text:"How are youu?",
      date: new Date(),
      sender: "me",
      id: 1
  },{
        text:"Hello",
        date: new Date(),
        sender: "other",
        id: 2
    }
    ]);
  return (
    <div className="bg-slate-100 p-4 h-full h-[calc(100% - 160px)] overflow-y-scroll">
    {messages.map((m) => (
      <Message message={m} key={m.id} />
    ))}
  </div>
  )
}

export default Messages