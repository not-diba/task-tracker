import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  const taskItems = tasks.map((task) => (
    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
  ));
  return <>{taskItems}</>;
};

export default Tasks;
