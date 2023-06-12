import React from "react";
import "../styles/add-conversation.css";

const AddConversationButton = ({ hanleAddConversationButton }) => {
  return (
    <div className="add-conversation-container">
      <p>Conversations</p>
      <img src="add.png" alt="add" onClick={hanleAddConversationButton} />
    </div>
  );
};

export default AddConversationButton;
