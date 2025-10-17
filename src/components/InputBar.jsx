import React from "react";
import { useState } from "react";
import { SendHorizonal } from "lucide-react";

function InputBar({ onSend }) {
  const [inputMessage, setInputMessage] = useState("");
  const inputRef = React.useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleSend = () => {
    if (inputMessage.trim() !== "") {
      onSend(inputMessage);
      setInputMessage("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <div className="input-bar">
      <input
        type="text"
        placeholder="Nhập câu hỏi của bạn"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleSend}>
        <SendHorizonal size={20} />
      </button>
    </div>
  );
}

export default InputBar;
