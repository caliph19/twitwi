import React, { useState, useEffect, useRef } from 'react';

const ChatApp = ({ person, messages, onSendMessage }) => {
  const [text, setText] = useState('');
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!person) {
    return (
      <div style={{ padding: '20px', color: '#888' }}>
        Select a person to start chatting
      </div>
    );
  }

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      text,
      sender: 'me',
      timestamp: new Date(),
      status: 'sent',
    };

    onSendMessage(newMessage);
    setText('');

    setTimeout(() => {
      onSendMessage({
        id: Date.now() + 1,
        text: 'Got your message!',
        sender: 'other',
        timestamp: new Date(),
      });
    }, 1000);
  };

  const getStatusIcon = (status) => {
    if (status === 'sent') return '✓';
    if (status === 'delivered') return '✓✓';
    return '';
  };

  const styles = {
    chatContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff', // changed chat area background to white
    },
    chatHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      background: '#fff', // header background white
      color: '#000', // text black
      borderBottom: '1px solid #ccc',
    },
    chatAvatar: {
      width: '40px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    chatMessages: {
      flex: 1,
      overflowY: 'auto',
      padding: '10px',
      backgroundColor: '#fff', // chat messages background white
      display: 'flex',
      flexDirection: 'column',
    },
    chatBubble: {
      marginBottom: '10px',
      padding: '8px 12px',
      borderRadius: '8px',
      maxWidth: '70%',
      wordWrap: 'break-word',
    },
    sent: {
      backgroundColor: '#dcf8c6',
      alignSelf: 'flex-end',
    },
    received: {
      backgroundColor: '#f1f1f1',
      alignSelf: 'flex-start',
    },
    chatTime: {
      fontSize: '10px',
      color: '#888',
      marginTop: '4px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '5px',
    },
    chatInput: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px',
      backgroundColor: 'white',
      borderTop: '1px solid #ccc',
    },
    input: {
      flex: 1,
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '20px',
      outline: 'none',
    },
    button: {
      padding: '10px 16px',
      border: 'none',
      borderRadius: '20px',
      backgroundColor: '#075e54',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
<div style={styles.chatContainer}>
      <div style={styles.chatHeader}>
        <img src={person.avatar} alt={person.name} style={styles.chatAvatar} />
        <div>
          <h4 style={{ margin: 0 }}>{person.name}</h4>
          <p style={{ margin: 0, fontSize: '12px' }}>online</p>
        </div>
      </div>

      <div style={styles.chatMessages} ref={messagesContainerRef}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              ...styles.chatBubble,
              ...(msg.sender === 'me' ? styles.sent : styles.received),
            }}
          >
            <p style={{ margin: 0 }}>{msg.text}</p>
            <div style={styles.chatTime}>
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              {msg.sender === 'me' && <span>{getStatusIcon(msg.status)}</span>}
            </div>
          </div>
        ))}
      </div>

      <form style={styles.chatInput} onSubmit={handleSend}>
        <input
          type="text"
          style={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default ChatApp;
