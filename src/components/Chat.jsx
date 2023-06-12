const Chat = ({ chat }) => {
  const { sent, msg } = chat;
  return (
    <div className="common">
      {sent === "1" && (
        <div className="sent">
          <span>{msg}</span>
        </div>
      )}
      {sent === "0" && (
        <div className="received">
          <span>{msg}</span>
        </div>
      )}
    </div>
  );
};

export default Chat;
