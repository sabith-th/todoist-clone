/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import AddProject from '../AddProject';
import Projects from '../Projects';

const SideBar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === 'inbox' ? 'active' : undefined}
          onClick={() => {
            setActive('inbox');
            setSelectedProject('INBOX');
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          data-testid="today"
          className={active === 'today' ? 'active' : undefined}
          onClick={() => {
            setActive('today');
            setSelectedProject('TODAY');
          }}
        >
          <span>
            <FaRegCalendar />
            <span>Today</span>
          </span>
        </li>
        <li
          data-testid="next_7"
          className={active === 'next_7' ? 'active' : undefined}
          onClick={() => {
            setActive('next_7');
            setSelectedProject('NEXT_7');
          }}
        >
          <span>
            <FaRegCalendarAlt />
            <span>Next 7 Days</span>
          </span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Project</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};

export default SideBar;
