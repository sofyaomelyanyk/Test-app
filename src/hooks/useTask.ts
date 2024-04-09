import {
  selectDoneTasks,
  selectError,
  selectInProgressTasks,
  selectToDoTasks,
  selectUseProfileUrl,
  selectUseRepoUrl,
} from "../store/selectors/taskGallerySelectors";
import { useAppSelector } from "../store/store";

const useTask = () => {
  const toDoTasks = useAppSelector(selectToDoTasks);
  const inProgressTasks = useAppSelector(selectInProgressTasks);
  const doneTasks = useAppSelector(selectDoneTasks);

  const userRepoUrl = useAppSelector(selectUseRepoUrl);
  const userProfileUrl = useAppSelector(selectUseProfileUrl);

  const userRepoName = userRepoUrl?.split("/").splice(-1)[0];
  const userProfileName = userProfileUrl?.split("/").splice(-1)[0];

  const errorMessage = useAppSelector(selectError);

  return {
    toDoTasks,
    inProgressTasks,
    doneTasks,
    userRepoUrl,
    userRepoName,
    userProfileUrl,
    userProfileName,
    errorMessage,
  };
};
export default useTask;
