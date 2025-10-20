import { useState } from "react";
import ChatBox from "./components/ChatBox/ChatBox";
import InputBar from "./components/InputBar/InputBar";
import SideBar from "./components/SideBar/SideBar";
import "./index.css";
function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const fakeChats = [
    {
      id: 1,
      title: "Chat về React",
      messages: [
        { sender: "user", text: "React là gì vậy?" },
        { sender: "bot", text: "React là thư viện JavaScript cho UI." },
      ],
    },
    {
      id: 2,
      title: "Chat về AI",
      messages: [
        { sender: "user", text: "AI hoạt động như nào?" },
        { sender: "bot", text: "AI học từ dữ liệu và mô hình thống kê." },
      ],
    },
  ];
  // const handleSendMessage = (text) => {
  //   if (!selectedChat) return;
  //   const newMessage = { role: "user", content: text };
  //   setSelectedChat({
  //     ...selectedChat,
  //     messages: [...selectedChat.messages, newMessage],
  //   });
  // };
  return (
    <div className="app-container">
      <SideBar chats={fakeChats} onSelectChat={setSelectedChat} />
      <div className="main-content">
        <ChatBox chat={selectedChat} />
        <InputBar onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
