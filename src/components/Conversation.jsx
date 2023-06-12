import React from "react";
import "../styles/conversation.css";
import contacts from "../data/contacts.json";

const Conversation = ({ chat, clickOnConversation }) => {
  const handleOnConversationClick = () => {
    //console.log("clicked");
    clickOnConversation(chat);
  };

  const getContact = () => {
    return contacts.find((contact) => {
      return contact.id === chat.contact_id;
    });
  };

  const { name, phone, url } = getContact();

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

export default Conversation;
