import { setCurrentBoard, moveTask } from "../store/slices/taskGallerySlice";
import { useAppDispatch } from "../store/store";
import useTask from "./useTask";

const useDragAndDrop = () => {
  const dispatch = useAppDispatch();
  const { userRepoUrl } = useTask();

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

  const handleDragStart = (e, taskId: number, index: number) => {
    e.dataTransfer.setData("text/plain", taskId);
    const col = getCurrentColumn(index);
    dispatch(setCurrentBoard(col));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, column) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    dispatch(
      moveTask({
        repoUrl: userRepoUrl,
        taskId: +taskId,
        destinationColumn: column,
      })
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return { handleDragStart, handleDrop, handleDragOver };
};
export default useDragAndDrop;
