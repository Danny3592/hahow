const ChatFrame = ({ children }) => {
  return (
    <div className="chat-frame-box">
      <div className="chat-frame">
        <div className="content">{children}</div>
      </div>
      <div className="chat-root"></div>
    </div>
  );
};

export default ChatFrame;
