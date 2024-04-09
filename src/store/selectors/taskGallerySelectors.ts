import { RootState } from "../store";

export const selectToDoTasks = (state: RootState, repoUrl: string) =>
  state.taskGallery?.repositories?.[repoUrl]?.toDo;
export const selectInProgressTasks = (state: RootState, repoUrl: string) =>
  state.taskGallery?.repositories?.[repoUrl]?.inProgress;
export const selectDoneTasks = (state: RootState, repoUrl: string) =>
  state.taskGallery?.repositories?.[repoUrl]?.done;
export const selectUseProfileUrl = (state: RootState) =>
  state.taskGallery.userProfileUrl;

export const selectUseRepoUrl = (state: RootState) =>
  state.taskGallery.userRepoUrl;

export const selectError = (state: RootState) => state.taskGallery.error;
