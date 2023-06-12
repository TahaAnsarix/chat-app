import React from "react";
import conacts from "../data/contacts.json";
import Contact from "./Contact";
import "../styles/contacts.css";

const ContactsList = ({ clickOnConversation }) => {
  return (
    <div className="contacts-container">
      <p className="side-title">Contacts List</p>
      <div className="contacts-list">
        {conacts.map((contact) => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              clickOnConversation={clickOnConversation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactsList;
