import React from "react";
import "../styles/conversations-list.css";
import Conversation from "./Conversation";
import SearchBar from "./SearchBar";
import AddConversationButton from "./AddConversationButton";
import SearchList from "./SearchList";

const ConversationsList = ({
  clickOnConversation,
  hanleAddConversationButton,
  chats,
  handleSearchConversation,
  showSearchButton,
  showConservation,
  searchedConversations,
}) => {
  return (
    <>
      <div className="conversations-list-container">
        {showSearchButton && (
          <div>
            <SearchBar
              handleSearchConversation={handleSearchConversation}
              chats={chats}
            />
          </div>
        )}

        <AddConversationButton
          hanleAddConversationButton={hanleAddConversationButton}
        />
        {showConservation &&
          chats.map((chat) => {
            return (
              <Conversation
                chat={chat}
                key={chat.id}
                clickOnConversation={clickOnConversation}
              />
            );
          })}
        {!showConservation && (
          <SearchList
            showConservation={showConservation}
            chats={chats}
            clickOnConversation={clickOnConversation}
            searchedConversations={searchedConversations}
          />
        )}
      </div>
    </>
  );
};

export default ConversationsList;
