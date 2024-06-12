import PropTypes from "prop-types";

const ChatForm = ({ username, setUsername, handleUsernameSubmit }) => {
  return (
    <div className="chat-form">
      <form onSubmit={handleUsernameSubmit}>
        <input
          type="text"
          placeholder="isminizi giriniz"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Chat`e katıl!</button>
      </form>
    </div>
  );
};

ChatForm.propTypes = {
  username: PropTypes.string,
  setUsername: PropTypes.func,
  handleUsernameSubmit: PropTypes.func,
};

export default ChatForm;
