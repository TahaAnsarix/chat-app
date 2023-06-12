import React from "react";
import chats from "../data/chats.json";

const Contact = ({ contact, clickOnConversation }) => {
  //const [count, setCount] = useState(chats.length);

  const handleOnContactClick = () => {
    let chat = chats.find((chat) => {
      return chat.contact_id === contact.id;
    });

    if (!chat) {
      chat = { chat: [], contact_id: contact.id, id: contact.id };
      console.log("Nope. But here u go. chat ", chat);
    } else {
      console.log("Yep. And here u go. chat ", chat);
    }

    clickOnConversation(chat);
  };
  return (
    <div className="conversation-card">
      <div className="profile-picture">
        <img src={contact.url} alt="profile" />
      </div>
      <div className="profile-details" onClick={handleOnContactClick}>
        <h4>{contact.name}</h4>
        <p>{contact.phone}</p>
      </div>
    </div>
  );
};

export default Contact;
