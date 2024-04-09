import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfileUrl: null,
  userRepoUrl: null,
  tasks: {
    toDo: [],
    inProgress: [],
    done: [],
  },
  currentBoard: null,
  error: "",
};

const taskGallerySlice = createSlice({
  name: "taskGallery",
  initialState,
  reducers: {
    setUserProfileUrl(state, action) {
      state.userProfileUrl = action.payload;
    },
    setUserRepoUrl(state, action) {
      state.userRepoUrl = action.payload;
    },
    setCurrentBoard(state, action: PayloadAction<string>) {
      state.currentBoard = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setTodo(state, action) {
      state.tasks.toDo = action.payload;
    },
    setInProgress(state, action) {
      state.tasks.inProgress = action.payload;
    },
    setDone(state, action) {
      state.tasks.done = action.payload;
    },
    moveTask(state, action) {
      const { taskId, destinationColumn } = action.payload;
      console.log(taskId, destinationColumn);
      const task = state?.tasks[state?.currentBoard]?.find(
        (task) => task.id === taskId
      );
      console.log(task);
      if (task) {
        state.tasks[state.currentBoard] = state.tasks[
          state.currentBoard
        ]?.filter((t) => t.id !== taskId);
        state.tasks[destinationColumn] = [
          ...state.tasks[destinationColumn],
          task,
        ];
        state.currentBoard = null;
      }
    },
  },
});

export const {
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
