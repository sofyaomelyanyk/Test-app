import { memo } from "react";
import s from "./styles.module.scss";
import calcDifferenceInDays from "../../helpers/calcDifferenceInDays";
import { useAppDispatch } from "../../store/store";
import { moveTask, setCurrentBoard } from "../../store/slices/taskGallerySlice";
import { Card, Divider } from "antd";

interface TaskColumnI {
  title: string;
  tasks: any;
  column: string;
  index: number;
}

const TaskColumn = memo(({ index, title, tasks, column }: TaskColumnI) => {
  const dispatch = useAppDispatch();

  const getCurrentColumn = (index: number): string => {
    switch (index) {
      case 0:
        return "toDo";
      case 1:
        return "inProgress";
      case 2:
        return "done";
      default:
        return "";
    }
  };

  const handleDragStart = (e, taskId: string) => {
    e.dataTransfer.setData("text/plain", taskId);
    const col = getCurrentColumn(index);
    dispatch(setCurrentBoard(col));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    dispatch(
      moveTask({
        taskId,
        destinationColumn: column,
      })
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Card
      title={title}
      id={column}
      style={{
        marginBottom: 20,
        width: 450,
        height: 750,
        border: "solid 1px #00000036",
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className={s.cardScroll}>
        {" "}
        {tasks?.length > 0 ? (
          tasks.map((task, index) => {
            const differenceInDays = calcDifferenceInDays(task);
            console.log(differenceInDays);
            return (
              <Card
                key={task.id}
                draggable
                style={{
                  border: "solid 1px #00000036",
                  marginTop: index > 0 ? 5 : 0,
                }}
                onDragStart={(e) => handleDragStart(e, task.id)}
                className={s.cardItem}
              >
                <h2 className={s.taskTitle}>{task?.title}</h2>
                <div className={s.wrap}>
                  <p>#{task?.number}</p>
                  <p>
                    {differenceInDays >= 1
                      ? `opened ${differenceInDays} days ago`
                      : "opened recently"}
                  </p>
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
          <p>No data</p>
        )}
      </div>
    </Card>
  );
});

export default TaskColumn;
