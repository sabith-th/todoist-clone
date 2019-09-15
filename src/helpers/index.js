/* eslint-disable max-len */
import collatedTasks from '../constants';

export const getTitle = (projects, projectId) => projects.find((project) => project.id === projectId);

export const getCollatedTitle = (projects, key) => projects.find((project) => project.key === key);

export const collatedTasksExist = (selectedProject) => collatedTasks.find((task) => task.key === selectedProject);

export const generatePushId = (() => {
  const PUSH_CHARS =    '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

  const lastRandChars = [];

  return function generate() {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    for (let i = 7; i >= 0; i -= 1) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join('');

    for (let i = 0; i < 12; i += 1) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();
