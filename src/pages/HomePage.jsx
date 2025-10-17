import React from "react";
import ChatBox from "../components/ChatBox";
import Message from "../components/Message";
import SideBar from "../components/SideBar";
import InputBar from "../components/InputBar";

function HomePage() {
  return (
    <>
      <h1>Hello friend</h1>
      <ChatBox />
      <Message />
      <SideBar />
      <InputBar />
    </>
  );
}

export default HomePage;
