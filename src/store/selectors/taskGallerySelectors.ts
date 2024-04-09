import { RootState } from "../store";

export const selectToDoTasks = (state: RootState) =>
  state.taskGallery?.tasks.toDo;
export const selectInProgressTasks = (state: RootState) =>
  state.taskGallery?.tasks.inProgress;
export const selectDoneTasks = (state: RootState) =>
  state.taskGallery?.tasks.done;
export const selectUseProfileUrl = (state: RootState) =>
  state.taskGallery.userProfileUrl;

export const selectUseRepoUrl = (state: RootState) =>
  state.taskGallery.userRepoUrl;

export const selectError = (state: RootState) => state.taskGallery.error;
