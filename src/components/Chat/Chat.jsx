import { useEffect, useState } from "react";
import ChatForm from "./ChatForm";
import { io } from "socket.io-client";

const socket = io.connect("https://basic-chat-app-jv0t.onrender.com");

const Chat = () => {
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  console.log(chat);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setChat([msg, ...chat]);
    });
  }, [chat]);

  function handleUsernameSubmit(e) {
    e.preventDefault();
    if (username) {
      setShowChat(true);
    }
  }

  function sendMessageHandler(e) {
    e.preventDefault();
    if (message !== "") {
      const msgData = { username, message };
      socket.emit("chat message", msgData);
      setMessage("");
    }
  }

  return (
    <div className=" my-4">
      {showChat ? (
        <div>
          Hoş geldin: <strong> {username}</strong>
          <form onSubmit={sendMessageHandler}>
            <div className="form-floating">
              <input
                type="text"
                placeholder="bir mesaj yazınız"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button>Gönder</button>
            </div>
          </form>
        </div>
      ) : (
        <ChatForm
          username={username}
          setUsername={setUsername}
          handleUsernameSubmit={handleUsernameSubmit}
        />
      )}
      <div className="chat-messages mt-2">
        {chat.map((msg, index) => (
          <p key={index} className="">
            <strong>{msg.username}:</strong> {msg.message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Chat;
