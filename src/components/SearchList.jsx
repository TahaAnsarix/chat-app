import React from "react";
import SearchedConversation from "./SearchedConversation";

const SearchList = ({
  showConservation,
  clickOnConversation,
  searchedConversations,
}) => {
  console.log("searchedConversations : ", searchedConversations[0]);
  if (!searchedConversations) {
    return (
      <div className="conversations-list-container">
        <p>No conversation mathces your search</p>
      </div>
    );
  }

  return (
    <div className="conversations-list-container">
      {searchedConversations &&
        searchedConversations[0].map((chat) => {
          return (
            <SearchedConversation
              chat={chat}
              key={chat.id}
              clickOnConversation={clickOnConversation}
            />
          );
        })}
    </div>
  );
};

export default SearchList;
