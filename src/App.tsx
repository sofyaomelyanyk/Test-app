import "./App.css";
import LinksUnderInput from "./components/LinksUnderInput/LinksUnderInput";
import RepoSearchForm from "./components/RepoSearchForm/RepoSearchForm";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import "./global.scss";

const App = () => {
  return (
    <>
      <RepoSearchForm />
      <LinksUnderInput />
      <TaskBoard />
    </>
  );
};

export default App;
