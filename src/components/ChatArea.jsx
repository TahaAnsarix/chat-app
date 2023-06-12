import React from "react";
import "../styles/chat-box.css";
import contacts from "../data/contacts.json";
import Chat from "./Chat";
import ChatBoxHeader from "./ChatBoxHeader";

const ChatArea = ({ chat }) => {
  console.log("chat : ", chat);

  const getProfilePicUrl = () => {
    if (chat.contact_id) {
      return contacts.find((contact) => {
        return contact.id === chat.contact_id;
      });
    } else {
      return { name: chat.name, url: chat.url };
    }
  };

  const { name, url } = getProfilePicUrl();

  let chats = [];
  if (chat.contact_id) chats = chat.chat;
  //console.log("chat : ", chat);
  return (
    <>
      <ChatBoxHeader name={name} url={url} />
      <div className="chat-area">
        <div className="chat">
          {chats.map((chat, index) => {
            return <Chat chat={chat} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ChatArea;
