import React from 'react';
import Tasks from '../Tasks';
import SideBar from './SideBar';

const Content = () => (
  <section className="content">
    <SideBar />
    <Tasks />
  </section>
);

export default Content;
