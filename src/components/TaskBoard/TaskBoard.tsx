import { Space } from "antd";
import useTask from "../../hooks/useTask";
import TaskColumn from "../TaskColumn/TaskColumn";
import { EditOutlined, FrownOutlined } from "@ant-design/icons";
import s from "./styles.module.scss";
import { memo } from "react";

const TaskBoard = memo(() => {
  const { toDoTasks, inProgressTasks, doneTasks, errorMessage } = useTask();
  const boardSections = [
    { title: "To Do", tasks: toDoTasks, column: "toDo" },
    { title: "In Progress", tasks: inProgressTasks, column: "inProgress" },
    { title: "Done", tasks: doneTasks, column: "done" },
  ];

  return (
    <>
      {errorMessage && (
        <div className={s.messageContainer}>
          <FrownOutlined style={{ fontSize: 20, color: "#d4380d" }} />
          <h2 style={{ color: "#d4380d" }}>{errorMessage}</h2>
        </div>
      )}
      {!errorMessage &&
        (toDoTasks?.length >= 0 ||
          inProgressTasks?.length >= 0 ||
          doneTasks?.length >= 0) && (
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
                columnIndex={index}
                title={section.title}
                tasks={section.tasks}
                column={section.column}
              />
            ))}
          </Space>
        )}
      {!errorMessage && (
        <div className={s.messageContainer}>
          <EditOutlined style={{ fontSize: 20 }} />
          <h2> Enter the URL of the required repository in the input</h2>
        </div>
      )}
    </>
  );
});

export default TaskBoard;
