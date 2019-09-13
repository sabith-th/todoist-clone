import collatedTasks from '../constants';

const collatedTasksExist = (selectedProject) => collatedTasks.find((task) => task.key === selectedProject);
export default collatedTasksExist;
