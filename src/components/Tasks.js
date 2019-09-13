import React from 'react';
import { useTask } from '../hooks';
import Checkbox from './Checkbox';

const Tasks = () => {
  const { tasks } = useTask('1');

  const projectName = '';

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="task__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={`${task.id}`} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
