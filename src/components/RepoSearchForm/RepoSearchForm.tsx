import { memo, useState } from "react";
import getIssues from "../../api/getIssues";
import { useAppDispatch } from "../../store/store";
import { setTodo } from "../../store/slices/taskGallerySlice";

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
      dispatch(setTodo(issues));
      console.log(issues);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter repo URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <button type="submit">Load</button>
    </form>
  );
});

export default RepoSearchForm;
