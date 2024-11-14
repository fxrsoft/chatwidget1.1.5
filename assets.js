export const styles = `    
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0');
  
  /* Import Google font - Poppins */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background: #E3F2FD;
}
.chatbot-toggler {
  outline: none;
  bottom: 30px;
  right: 35px;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  // background: #724ae8;
  transition: all 0.2s ease;
}


body.show-chatbot .chatbot-toggler {
  transform: rotate(360deg);
}
.chatbot-toggler span {
  color: #fff;
  position: absolute;
}
.chatbot-toggler span:last-child,
body.show-chatbot .chatbot-toggler span:first-child  {
  opacity: 1;
}
body.show-chatbot .chatbot-toggler span:last-child {
  opacity: 1;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.chatbot {
  position: fixed;
  // right: 35px;
  // left: 35px;
  // bottom: 90px;
  width: 370px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
  transform-origin: bottom right;
  box-shadow: 0 0 128px 0 rgba(0,0,0,0.1),
              0 32px 64px -48px rgba(0,0,0,0.5);
  transition: all 0.1s ease;
}
body.show-chatbot .chatbot {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}
.chatbot header {
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #fff;
  // background: #724ae8;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.chatbot header span {
  position: absolute;
  right: 15px;
  top: 50%;
  // display: none;
  cursor: pointer;
  transform: translateY(-50%);
}
header h2 {
  font-size: 1.4rem;
}
.chatbot .chatbox {
  overflow-y: auto;
  // height: 460px;
  padding: 30px 20px 100px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
  width: 6px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 25px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
  background: #ccc;
//   // border-radius: 25px;
// }
.chatbox .chat {
  display: flex;
  list-style: none;
}
.chatbox .outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}
.chatbox .incoming span {
  width: 32px;  /* size of the avatar */
  height: 32px;
  color: #fff; /* colour of the avatar */
  cursor: default;
  text-align: center;
  line-height: 32px;
  align-self: flex-end;
  // background: #724ae8;
  border-radius: 4px;
  margin: 0 10px 7px 0;
}
.chatbox .chat p {
  white-space: pre-wrap;
  padding: 12px 16px;
  border-radius: 10px 10px 0 10px;
  max-width: 95%;
  color: #fff;
  // font-size: 0.95rem;
  // background: #724ae8;
}
.chatbox .incoming p {
  border-radius: 5px 10px 10px 0; /* colour of the avatar */
  padding: 2px 2px;
  width: 310px;
}
.chatbox .chat p.error {
  color: #721c24;
  background: #f8d7da;
}
.chatbox .incoming p {
  color: #000;
  padding: 25px 6px;
  background: #f2f2f2;
}
.chatbot .chat-input {
  display: flex; 
  gap: 5px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background: #fff;
  padding: 3px 12px 38px 20px;
  border-top: 1px solid #ddd;
}
.chat-input textarea {
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  padding: 15px 15px 24px 0;
  font-size: 0.95rem;
}
.chat-input span {
  align-self: flex-end;
  // color: #724ae8;
  cursor: pointer;
  height: 55px;
  display: flex;
  align-items: center;
  visibility: hidden;
  font-size: 0.95rem;
}
.chat-input textarea:valid ~ span {
  visibility: visible;
}

@media (max-width: 260px) {
  .chatbot-toggler {
    right: 20px;
    bottom: 20px;
  }
  .chatbot {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0px;
    width: 100%;
  }
  .chatbot .chatbox {
    height: 90%;
    // width: 375px;
    padding: 25px 15px 100px;
  }
  .chatbot .chat-input {
    padding: 5px 15px;
  }
  .chatbot header span {
    display: block;
  }
}

.footer {
  position: absolute; /* Add this */
  bottom: 0; /* Add this */
  width: 100%; /* Add this */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; /* Add this */
  font-size: 0.8em;
  // padding: 28px 5px 5px;
  text-align: center;
  // height: 50px;
  margin: auto;
}

.footer a {
  color: inherit;
  text-decoration: none;
  // font-size: 0.8em;
}
.chat-image {
  max-height: 160px;  /* Adjust this value as needed */
  width: auto;
}

.message-container {
  text-align: left;  /* Left-align the message text */
}
.image-container {
  order: 2;  /* Make the image appear below the message */
}
`;