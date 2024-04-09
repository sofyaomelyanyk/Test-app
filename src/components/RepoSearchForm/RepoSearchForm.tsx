import { memo, useState } from "react";
import getIssues from "../../api/getIssues";
import { useAppDispatch } from "../../store/store";
import {
  setError,
  setTodo,
  setUserProfileUrl,
  setUserRepoUrl,
} from "../../store/slices/taskGallerySlice";
import { Button, Input } from "antd";
import s from "./styles.module.scss";

const RepoSearchForm = memo(() => {
  const [repoUrl, setRepoUrl] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const urlParts = repoUrl.split("/");
      const owner = urlParts[3];
      const repoName = urlParts[4];

      const issues = await getIssues(owner, repoName);
      dispatch(
        setUserProfileUrl(repoUrl.substring(0, repoUrl.lastIndexOf("/")))
      );
      dispatch(setUserRepoUrl(repoUrl));
      dispatch(setTodo(issues));
      dispatch(setError(""));
      console.log(issues);
    } catch (error) {
      const message =
        "Failed to fetch issues. Please check your repository URL and try again.";
      dispatch(setError(message));
    }
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter repo URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <Button type="primary" htmlType="submit">
        Load issues
      </Button>
    </form>
  );
});

export default RepoSearchForm;
