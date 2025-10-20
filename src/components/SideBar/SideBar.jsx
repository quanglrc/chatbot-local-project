import React, { useState } from "react";
import "./SideBar.css";

function SideBar({ chats, onSelectChat, onNewChat }) {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img
              className="sidebar-logo img"
              src="/React-Logo.png"
              alt="chatbotlocal"
            />
          </div>
          <button className="new-chat-btn" onClick={onNewChat}>
            + New chat
          </button>
        </div>
      </div>
      <div className="chat-list">
        <h2>chats</h2>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="chat-item"
            onClick={() => onSelectChat(chat)}
          >
            {chat.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
