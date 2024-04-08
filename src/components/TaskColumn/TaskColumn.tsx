import { memo } from "react";
import s from "./styles.module.scss";
import calcDifferenceInDays from "../../helpers/calcDifferenceInDays";
import { useAppDispatch } from "../../store/store";
import { moveTask, setCurrentBoard } from "../../store/slices/taskGallerySlice";

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

  const handleDragStart = (
    e: React.DragEvent<HTMLLIElement>,
    taskId: string
  ) => {
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
    <div
      className={s.taskColumn}
      id={column}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h1 className={s.title}>{title}</h1>
      <ul className={s.todosList}>
        {tasks?.length > 0 ? (
          tasks.map((task) => {
            const differenceInDays = calcDifferenceInDays(task);
            console.log(differenceInDays);
            return (
              <li
                className={s.todosItem}
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
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
                  <p>Comments: {task.comments}</p>
                </div>
              </li>
            );
          })
        ) : (
          <p>No data</p>
        )}
      </ul>
    </div>
  );
});

export default TaskColumn;
