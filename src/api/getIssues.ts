import axios from "axios";

const getIssues = async (owner: string, repoName: string) => {
  try {
    const apiUrl = `https://api.github.com/repos/${owner}/${repoName}/issues?per_page=10`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getIssues;
