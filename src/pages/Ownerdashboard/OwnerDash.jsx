import React, { useState } from 'react';
import { LuLayoutDashboard, LuCalendarCheck } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";
import sidebarlogo1 from '../../images/logo.png';

// Import the separated components
import DashboardContent from './DashboardContent';
import MessagesContent from './MessagesContent';
import BookingsContent from './BookingContent';

const OwnerDash = () => {
  const [activeOption, setActiveOption] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LuLayoutDashboard /> },
    { id: 'bookings', label: 'My Bookings', icon: <LuCalendarCheck /> },
    { id: 'messages', label: 'Messages', icon: <BsEnvelope /> },
  ];

  const renderContent = () => {
    switch (activeOption) {
      case 'dashboard':
        return <DashboardContent />;
      case 'messages':
        return <MessagesContent />;
      case 'bookings':
        return <BookingsContent />;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className="owner-dash-container">
      <div className="sidebar">
        <div className="sidebarlogo">
          <img src={sidebarlogo1} alt="Logo" />
        </div>
        <p className="sidebar-title">Menu</p>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item ${activeOption === item.id ? 'active' : ''}`}
              onClick={() => setActiveOption(item.id)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default OwnerDash;
