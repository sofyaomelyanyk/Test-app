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
  const userRepoUrl = useAppSelector(selectUseRepoUrl);
  const userProfileUrl = useAppSelector(selectUseProfileUrl);

  const toDoTasks = useAppSelector((state) =>
    selectToDoTasks(state, userRepoUrl)
  );
  const inProgressTasks = useAppSelector((state) =>
    selectInProgressTasks(state, userRepoUrl)
  );
  const doneTasks = useAppSelector((state) =>
    selectDoneTasks(state, userRepoUrl)
  );

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
