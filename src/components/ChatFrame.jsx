const ChatFrame = ({ children, color }) => {
  return (
    <div className="chat-frame-box">
      <div className="chat-frame" style={{ background: color }}>
        <div className="content">{children}</div>
        <div className="chat-root" style={{ background: color }}></div>
      </div>
    </div>
  );
};

export default ChatFrame;
