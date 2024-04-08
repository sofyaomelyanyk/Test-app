import "./App.css";
import RepoSearchForm from "./components/RepoSearchForm/RepoSearchForm";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import "./global.scss";

const App = () => {
  return (
    <>
      <RepoSearchForm />
      <TaskBoard />
    </>
  );
};

export default App;
