import { memo } from "react";
import s from "./styles.module.scss";
import calcDifferenceInDays from "../../helpers/calcDifferenceInDays";
import { Card, Divider } from "antd";
import calcTimeAgo from "../../helpers/calcTimeAgo";
import { TaskT } from "../../models/models";
import { FileOutlined } from "@ant-design/icons";
import useDragAndDrop from "../../hooks/useDragAndDrop";

interface TaskColumnI {
  title: string;
  tasks: TaskT[];
  column: string;
  columnIndex: number;
}

const TaskColumn = memo(
  ({ columnIndex, title, tasks, column }: TaskColumnI) => {
    const { handleDragStart, handleDrop, handleDragOver } = useDragAndDrop();

    return (
      <Card
        title={title}
        id={column}
        style={{
          width: 450,
          height: 750,
          border: "solid 1px #00000036",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        }}
        onDrop={(e) => handleDrop(e, column)}
        onDragOver={handleDragOver}
      >
        <div className={s.cardScroll}>
          {tasks?.length > 0 ? (
            tasks.map((task, index) => {
              const differenceInDays = calcDifferenceInDays(task);
              return (
                <Card
                  key={task.id}
                  draggable
                  className={s.cardItem}
                  style={{
                    marginTop: index > 0 ? 5 : 0,
                    boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.75)",
                  }}
                  onDragStart={(e) => handleDragStart(e, task.id, columnIndex)}
                >
                  <h2 className={s.taskTitle}>{task?.title}</h2>
                  <div className={s.wrap}>
                    <p>#{task?.number}</p>
                    <p>{calcTimeAgo(differenceInDays)}</p>
                  </div>
                  <div className={s.wrap}>
                    <p>Admin</p>
                    <Divider
                      type="vertical"
                      style={{ margin: 0, borderColor: "#00000036" }}
                    />
                    <p>Comments: {task.comments}</p>
                  </div>
                </Card>
              );
            })
          ) : (
            <div className={s.messageContainer}>
              <FileOutlined style={{ fontSize: 20 }} />
              <p>No data</p>
            </div>
          )}
        </div>
      </Card>
    );
  }
);

export default TaskColumn;
