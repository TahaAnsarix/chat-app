import React, { useRef } from "react";

const SendMessageComponent = ({ sendChat }) => {
  let text = useRef();

  const handleSendChatButtonClick = () => {
    if (text.current.value) {
      sendChat(text.current.value);
      text.current.value = "";
    }
  };

  return (
    <div className="send-message-container">
      <textarea name="" id="" cols="30" rows="4" ref={text}></textarea>
      <img
        src="direct.png"
        alt="send-message"
        onClick={handleSendChatButtonClick}
      />
    </div>
  );
};

export default SendMessageComponent;
