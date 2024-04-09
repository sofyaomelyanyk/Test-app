import { Space } from "antd";
import useTask from "../../hooks/useTask";
import TaskColumn from "../TaskColumn/TaskColumn";

const TaskBoard = () => {
  const { toDoTasks, inProgressTasks, doneTasks, errorMessage } = useTask();
  const boardSections = [
    { title: "To Do", tasks: toDoTasks, column: "toDo" },
    { title: "In Progress", tasks: inProgressTasks, column: "inProgress" },
    { title: "Done", tasks: doneTasks, column: "done" },
  ];
  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {toDoTasks && !errorMessage && (
        <Space
          direction="horizontal"
          size={20}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {boardSections.map((section, index) => (
            <TaskColumn
              key={index}
              index={index}
              title={section.title}
              tasks={section.tasks}
              column={section.column}
            />
          ))}
        </Space>
      )}
    </>
  );
};

export default TaskBoard;
