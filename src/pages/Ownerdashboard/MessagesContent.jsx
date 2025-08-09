import React, { useState } from 'react';
import ChatApp from '../../components/ChatApp';
import chat1 from "../../images/c4.png";
import chat2 from "../../images/c5.png";
import chat3 from "../../images/c1.png";
import chat4 from "../../images/c2.png";

const peopleData = [
  { id: 1, name: 'Alice Johnson', message: 'See you tomorrow!', avatar:chat1 , chat: [] },
  { id: 2, name: 'Michael Smith', message: 'Thanks for the update!', avatar: chat1, chat: [] },
  { id: 3, name: 'Emma Brown', message: 'Let’s meet later.', avatar: chat1, chat: [] },
  { id: 4, name: 'James Lee', message: 'Got it, thanks.', avatar: chat2, chat: [] },
  { id: 5, name: 'Olivia Wilson', message: 'Okay, no problem.', avatar: chat1, chat: [] },
  { id: 6, name: 'Daniel White', message: 'Will send it soon.', avatar: chat3, chat: [] },
  { id: 7, name: 'Sophia Clark', message: 'Sure thing!', avatar: chat2, chat: [] },
  { id: 8, name: 'William Hall', message: 'See you there.', avatar: chat1, chat: [] },
  { id: 9, name: 'Mia King', message: 'Sounds good!', avatar: chat1, chat: [] },
  { id: 10, name: 'David Scott', message: 'On my way.', avatar: chat4, chat: [] },
  { id: 11, name: 'Liam Turner', message: 'All set.', avatar: chat1, chat: [] },
  { id: 12, name: 'Isabella Harris', message: 'Let’s start.', avatar: chat1, chat: [] },
  { id: 13, name: 'Benjamin Allen', message: 'Thanks!', avatar: chat3, chat: [] },
  { id: 14, name: 'Charlotte Young', message: 'Perfect.', avatar: chat1, chat: [] },
  { id: 15, name: 'Henry Wright', message: 'I’ll check it.', avatar: chat2, chat: [] },
];

const MessagesContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [people, setPeople] = useState(peopleData);
  const [selectedPersonId, setSelectedPersonId] = useState(null);

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedPerson = people.find(p => p.id === selectedPersonId);

  const handleSendMessage = (personId, newMessage) => {
    setPeople(prevPeople =>
      prevPeople.map(person =>
        person.id === personId
          ? { ...person, chat: [...person.chat, newMessage] }
          : person
      )
    );
  };

  return (
    <div className="messagecontentmain" style={{ display: 'flex', height: '90vh', border: '1px solid #ccc' }}>
      
      {/* Left Sidebar */}
      <div className="messageconleft" style={{ width: '30%', borderRight: '1px solid #ccc', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px', backgroundColor: '#fff', color: '#000', fontWeight: 'bold', fontSize: '18px' }}>
          Messages
        </div>
        
        {/* Search Bar */}
        <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '95%',
              padding: '8px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          />
        </div>

        {/* People List */}
        <div style={{ overflowY: 'auto', flex: 1, backgroundColor: '#fff' }}>
          {filteredPeople.map((person) => (
            <div
              key={person.id}
              onClick={() => setSelectedPersonId(person.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderBottom: '1px solid #f0f0f0',
                cursor: 'pointer',
                backgroundColor: person.id === selectedPersonId ? '#f0f0f0' : 'white',
              }}
            >
              <img
                src={person.avatar}
                alt={person.name}
                style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold' }}>{person.name}</div>
                <div style={{ fontSize: '12px', color: '#555' }}>{person.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Area */}
      <div className="messageconright" style={{ flex: 1 }}>
        {selectedPerson ? (
          <ChatApp
            person={selectedPerson}
            messages={selectedPerson.chat}
            onSendMessage={(msg) => handleSendMessage(selectedPerson.id, msg)}
          />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#888' }}>
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesContent;
