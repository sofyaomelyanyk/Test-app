import {
  selectDoneTasks,
  selectInProgressTasks,
  selectToDoTasks,
} from "../store/selectors/taskGallerySelectors";
import { useAppSelector } from "../store/store";

const useTask = () => {
  const toDoTasks = useAppSelector(selectToDoTasks);
  const inProgressTasks = useAppSelector(selectInProgressTasks);
  const doneTasks = useAppSelector(selectDoneTasks);

  return { toDoTasks, inProgressTasks, doneTasks };
};
export default useTask;
