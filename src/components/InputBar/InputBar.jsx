import React, { useState } from "react";
import "./InputBar.css";
function InputBar({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="inputbar">
      <form className="inputbar form">
        <input
          type="text"
          placeholder="Bạn cần hỏi điều gì?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => (e.key = "Enter" && handleSend)}
        />
        <button onClick={handleSend}>Send</button>
      </form>
    </div>
  );
}

export default InputBar;
