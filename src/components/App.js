import { useState } from "react";
import "../styles/App.css";
import ChatBox from "./ChatBox";
import ContactsList from "./ContactsList";
import ConversationsList from "./ConversationsList";
import conversations from "../data/chats.json";
import contacts from "../data/contacts.json";

function App() {
  const [chats, setChats] = useState(conversations);
  const [chat, setChat] = useState([]);
  const [showContacts, setShowContacts] = useState(false);
  const [showConservation, setShowConservation] = useState(true);
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [searchedConversations, setSearchedConversations] = useState([]);

  // console.log("chats : ", chats);
  const clickOnConversation = (chatObj) => {
    if (showContacts) {
      // console.log("Before chats : ", chats);
      // console.log("Before chatObj : ", chatObj);
      const chat_id = chats.findIndex((c) => {
        return c.id === chatObj.id;
      });

      if (chat_id === -1) {
        // console.log("before chat : ", chat);
        // console.log("chat_id : ", chat_id);
        setChats((prev) => {
          return [...prev, chatObj];
        });
      }

      // console.log("after chat : ", chat);
      setShowContacts(false);
      console.log("After chats : ", chats);
      // console.log("After chatObj : ", chatObj);
    }
    setChat(chatObj);
  };

  const sendChat = (text) => {
    const newChat = { ...chat, chat: [...chat.chat, { sent: "1", msg: text }] };
    setChat(newChat);
  };

  const hanleAddConversationButton = () => {
    setShowContacts(true);
  };

  const handleCloseBtnClick = () => {
    setShowContacts(false);
  };

  const handleSearchConversation = (searchText) => {
    if (!searchText) {
      setShowConservation(true);
      return;
    }
    console.log("searchText", searchText);
    setShowContacts(false);
    setShowConservation(false);
    setShowSearchButton(true);
    let filteredConversations = contacts.filter((c) => {
      // console.log(
      //   "c.name.startsWith : ",
      //   c.name.toLocaleLowerCase().startsWith(searchText)
      // );
      return c.name.toLocaleLowerCase().startsWith(searchText);
    });

    // console.log("filteredConversations : ", filteredConversations);

    if (filteredConversations) {
      console.log("filteredConversations.length : ", filteredConversations);
      setSearchedConversations((prev) => {
        return [filteredConversations];
      });
    }

    console.log("searchedConversations : ", searchedConversations);
  };

  return (
    <div className="App">
      {showContacts && (
        <ContactsList
          handleCloseBtnClick={handleCloseBtnClick}
          clickOnConversation={clickOnConversation}
        />
      )}
      {!showContacts && (
        <ConversationsList
          clickOnConversation={clickOnConversation}
          hanleAddConversationButton={hanleAddConversationButton}
          chats={chats}
          handleSearchConversation={handleSearchConversation}
          showSearchButton={showSearchButton}
          showConservation={showConservation}
          searchedConversations={searchedConversations}
        />
      )}
      {chat.length !== 0 && <ChatBox chat={chat} sendChat={sendChat} />}
    </div>
  );
}

export default App;
