import React from "react";

const ChatBoxHeader = ({ name, url }) => {
  return (
    <div className="chat-box-header">
      <img src={url} alt="profile" />
      <p>{name}</p>
    </div>
  );
};

export default ChatBoxHeader;
