import { useEffect, useRef } from "react";
import "./ChatBox.css";

function ChatBox({ chat }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="chatbox-area">
      <div className="message-list">
        {chats.messages.length === 0 ? (
          <div className="chatbox-empty">Bạn cần hỏi điều gì?</div>
        ) : (
          chats.messages.map((msg, index) => (
            <div
              key={index}
              className={`message. ${msg.sender === "user" ? "user" : "bot"}`}
            >
              <div className="message-content">{msg.text}</div>
            </div>
          ))
        )}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}

export default ChatBox;
