import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskT } from "../../models/models";

interface RepositoryBoardsI {
  toDo: TaskT[];
  inProgress: TaskT[];
  done: TaskT[];
}

interface initialStateI {
  userProfileUrl: string;
  userRepoUrl: string;
  repositories: {
    [repoUrl: string]: RepositoryBoardsI;
  };
  currentBoard: string;
  error: string;
}

const initialState: initialStateI = {
  userProfileUrl: "",
  userRepoUrl: "",
  repositories: {},
  currentBoard: "",
  error: "",
};

const taskGallerySlice = createSlice({
  name: "taskGallery",
  initialState,
  reducers: {
    setUserProfileUrl(state, action: PayloadAction<string>) {
      state.userProfileUrl = action.payload;
    },
    setUserRepoUrl(state, action: PayloadAction<string>) {
      state.userRepoUrl = action.payload;
    },
    setCurrentBoard(state, action: PayloadAction<string>) {
      state.currentBoard = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setTodo(state, action: PayloadAction<{ repoUrl: string; tasks: TaskT[] }>) {
      const { repoUrl, tasks } = action.payload;
      if (!state.repositories[repoUrl]) {
        state.repositories[repoUrl] = { toDo: [], inProgress: [], done: [] };
      }
      state.repositories[repoUrl].toDo = tasks;
    },
    setInProgress(
      state,
      action: PayloadAction<{ repoUrl: string; tasks: TaskT[] }>
    ) {
      const { repoUrl, tasks } = action.payload;
      if (!state.repositories[repoUrl]) {
        state.repositories[repoUrl] = { toDo: [], inProgress: [], done: [] };
      }
      state.repositories[repoUrl].inProgress = tasks;
    },
    setDone(state, action: PayloadAction<{ repoUrl: string; tasks: TaskT[] }>) {
      const { repoUrl, tasks } = action.payload;
      if (!state.repositories[repoUrl]) {
        state.repositories[repoUrl] = { toDo: [], inProgress: [], done: [] };
      }
      state.repositories[repoUrl].done = tasks;
    },
    moveTask(
      state,
      action: PayloadAction<{
        repoUrl: string;
        taskId: number;
        destinationColumn: string;
      }>
    ) {
      const { repoUrl, taskId, destinationColumn } = action.payload;
      const task = state.repositories[repoUrl][state.currentBoard]?.find(
        (task) => task.id === taskId
      );

      if (task) {
        state.repositories[repoUrl][state.currentBoard] = state.repositories[
          repoUrl
        ][state.currentBoard]?.filter((t) => t.id !== taskId);
        state.repositories[repoUrl][destinationColumn] = [
          ...state.repositories[repoUrl][destinationColumn],
          task,
        ];
      }
    },
    setExistingRepository(state, action: PayloadAction<{ repoUrl: string }>) {
      const { repoUrl } = action.payload;
      if (state.repositories[repoUrl]) {
        state.repositories[repoUrl] = state.repositories[repoUrl];
      }
    },
  },
});

export const {
  setExistingRepository,
  setTodo,
  setInProgress,
  setDone,
  moveTask,
  setCurrentBoard,
  setUserProfileUrl,
  setUserRepoUrl,
  setError,
} = taskGallerySlice.actions;
export default taskGallerySlice.reducer;
