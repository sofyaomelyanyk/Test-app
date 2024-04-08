import useTask from "../../hooks/useTask";
import TaskColumn from "../TaskColumn/TaskColumn";
import s from "./styles.module.scss";

const TaskBoard = () => {
  const { toDoTasks, inProgressTasks, doneTasks } = useTask();
  const boardSections = [
    { title: "To Do", tasks: toDoTasks, column: "toDo" },
    { title: "In Progress", tasks: inProgressTasks, column: "inProgress" },
    { title: "Done", tasks: doneTasks, column: "done" },
  ];
  return (
    <div className={s.taskBoard}>
      {boardSections.map((section, index) => (
        <TaskColumn
          key={index}
          index={index}
          title={section.title}
          tasks={section.tasks}
          column={section.column}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
