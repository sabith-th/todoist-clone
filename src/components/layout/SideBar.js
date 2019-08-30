import React from 'react';
import {
  FaChevronDown, FaInbox, FaRegCalendar, FaRegCalendarAlt,
} from 'react-icons/fa';

const SideBar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li>
        <span>
          <FaRegCalendar />
          <span>Today</span>
        </span>
      </li>
      <li>
        <span>
          <FaRegCalendarAlt />
          <span>Today</span>
        </span>
      </li>
    </ul>
    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Project</h2>
    </div>
    <ul className="sidebar__projects">Projects will be here!</ul>
    Add Project component here
  </div>
);

export default SideBar;
