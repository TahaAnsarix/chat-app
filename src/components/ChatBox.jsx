import "../styles/chat-box.css";
import ChatArea from "./ChatArea";
import SendMessageComponent from "./SendMessageComponent";

const ChatBox = ({ chat, sendChat }) => {
  return (
    <div className="chat-box-container">
      <ChatArea chat={chat} />
      <SendMessageComponent sendChat={sendChat} />
    </div>
  );
};

export default ChatBox;
