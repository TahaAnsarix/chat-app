import React from "react";
import "../styles/conversation.css";

const SearchedConversation = ({ chat, clickOnConversation }) => {
  const handleOnConversationClick = () => {
    clickOnConversation(chat);
  };

  const { name, phone, url } = chat;

  return (
    <div className="conversation-card">
      <div className="profile-picture">
        <img src={url} alt="profile" />
      </div>
      <div className="profile-details" onClick={handleOnConversationClick}>
        <h4>{name}</h4>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default SearchedConversation;
