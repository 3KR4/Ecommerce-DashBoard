import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Css/chat.css';
import { paragraph, userImage } from '../Methods';
import { userChats, userChatHistories } from '../components/data';
import { FaSearch } from "react-icons/fa";
import { GrGallery, GrAttachment } from "react-icons/gr";
import { LuSendHorizonal } from "react-icons/lu";
import { IoChatbubblesOutline, IoDocumentTextOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { allContext } from '../AllContext';
import { IoMdArrowRoundBack } from "react-icons/io";

function formatTimeAgo(timestamp) {
  const messageTime = new Date(timestamp);
  const currentTime = new Date();
  
  const timeDifference = currentTime - messageTime;
  
  const secondsDifference = Math.floor(timeDifference / 1000);
  
  if (secondsDifference < 60) {
    return `${secondsDifference} seconds ago`;
  } else if (secondsDifference < 3600) {
    const minutes = Math.floor(secondsDifference / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (secondsDifference < 86400) {
    const hours = Math.floor(secondsDifference / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (isYesterday(messageTime, currentTime)) {
    return 'Yesterday';
  } else if (messageTime.getFullYear() === currentTime.getFullYear()) {
    const day = messageTime.getDate();
    const month = messageTime.getMonth() + 1;
    return `${day}/${month}/${messageTime.getFullYear()}`;
  } else {
    const day = messageTime.getDate();
    const month = messageTime.getMonth() + 1;
    const year = messageTime.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

function isYesterday(date, currentDate) {
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  return date.getDate() === yesterday.getDate()
    && date.getMonth() === yesterday.getMonth()
    && date.getFullYear() === yesterday.getFullYear();
}

export default function Chat() {
  const { screenSize } = allContext();

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const paramUserId = queryParams.get('chat');
  const [selectedUserId, setSelectedUserId] = useState(paramUserId);

  useEffect(() => {
    if (paramUserId) {
      setSelectedUserId(paramUserId);
    }
  }, [paramUserId]);

  const selectedUserChat = userChatHistories.find(user => user.userId === +selectedUserId);

  const [openModels, setOpenModels] = useState({
    info: false,
    import: false
  });

  function handelModels(type) {
    setOpenModels((prevState) => ({
      ...prevState,
      [type]: !prevState[type]
    }));
  }

  function UserChatList() {
    return (
      <>
        {userChats.map((user, index) => (
          <Link
            className={`user ${+selectedUserId === user.id ? 'active' : ''}`}
            key={index}
            to={`/chat?chat=${user.id}`}
            onClick={() => setSelectedUserId(user.id)}
          >
            <h3 className="userNick">
              {userImage(user.name)}
            </h3>
            <div className="name-message">
              <h4>{user.name}</h4>
              <p>{paragraph(user.lastMessage, 26)}</p>
            </div>
            <div className="time-mesNum">
              <span>{formatTimeAgo(user.lastTime)}</span>
              {user.newMessage > 0 && (
                <span className='newMessage'>{user.newMessage}</span>
              )}
            </div>
          </Link>
        ))}
      </>
    );
  }

  return (
    <div className='chat-page'>
      {!((screenSize === 'small' || screenSize === 'medium') && paramUserId) && (
        <div className="side-users">
          <div className="top">
            <h2 className="sectionTitle">All Chats</h2>
            <div className="searchInputHolder">
              <div className='inputHolder'>
                <h6 className="placeHolder" onClick={() => document.getElementById('chatSearchInput').focus()}>Search...</h6>
                <div className="holder">
                  <FaSearch />
                  <input
                    type="text"
                    id='chatSearchInput'
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="allChatUsers">
            <UserChatList />
          </div>

        </div>
      )}
      {(screenSize === 'large' || selectedUserId) && (
        <div className="main-chat">
          {selectedUserId == null ? (
            <div className="hidden">
              <IoChatbubblesOutline />
              <h2>Choose a customer to start Chat with</h2>
            </div>
          ) : (
            <>
              <div className="top">
                <div>
                  <Link to='/chat'><IoMdArrowRoundBack/></Link>
                  <h4>{selectedUserChat.name}</h4>
                </div>
                <div className="info">
                  <button onClick={() => handelModels('info')}>Info</button>
                  <div className={`data ${openModels.info ? 'active' : ''}`}>
                    <h5>Phone: {selectedUserChat.phone}</h5>
                    <h5>Email: {selectedUserChat.email}</h5>
                  </div>
                </div>
              </div>
              <div className="the-chat">
                {selectedUserChat.chats.length > 0 ? (
                  selectedUserChat.chats.map((chat, index) => (
                    <div key={index} className={`chat-message ${chat.sender === 'You' ? 'send' : 'receive'}`}>
                      <div className="holder">
                        <div className="top">
                          <span className="message-sender">{chat.sender}</span>
                          <span className="message-timestamp">{formatTimeAgo(chat.timestamp)}</span>
                        </div>
                        <p>{chat.message}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <h3>No chat history available.</h3>
                )}
              </div>
              <div className="bottom">
                <div className="importFiles main-buttom" onClick={() => handelModels('import')}>
                  <h4>Import Files:</h4>
                  <GrAttachment />
                  <ul className={`filesHolder ${openModels.import ? 'active' : ''}`}>
                    <li onClick={() => console.log("Import Photos & Videos")}>
                      <GrGallery /> Photos & Videos
                    </li>
                    <li>
                      <IoDocumentTextOutline style={{ fontSize: '18px' }} /> Documents
                    </li>
                  </ul>
                </div>
                <textarea placeholder='Type a message' />
                <LuSendHorizonal className='send' />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
