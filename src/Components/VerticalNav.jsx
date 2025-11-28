import React, { useState } from 'react';
import '../assets/CSSFiles/Home/Navbar.css';
import { Icon } from '@iconify/react';

export default function VerticalNav() {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', icon: 'ic:round-home' },
    { id: 'about', icon: 'material-symbols:person-rounded' },
    { id: 'education', icon: 'mdi:book-education' },
    { id: 'folder', icon: 'ic:baseline-work' },
    { id: 'mail', icon: 'mynaui:send-solid' },
  ];

  return (
    <nav className="fixed bottom-5 md:top-1/2 md:right-5 md:transform md:-translate-y-1/2 z-10">
      <ul className="navbar flex md:flex-col flex-row space-x-4 md:space-x-0 md:space-y-4 cursor-pointer">
        {navItems.map((item) => (
          <li key={item.id} onClick={() => setActiveNav(item.id)} className={activeNav === item.id ? 'active' : ''}>
            <div>
              <Icon icon={item.icon} className="w-8 h-8 md:w-9 md:h-9" />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
