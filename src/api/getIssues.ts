import axios from "axios";

const getIssues = async (owner: string, repoName: string) => {
  try {
    const apiUrl = `https://api.github.com/repos/${owner}/${repoName}/issues?per_page=5`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getIssues;
