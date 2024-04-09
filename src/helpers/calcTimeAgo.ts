const calcTimeAgo = (differenceInDays: number): string => {
  if (differenceInDays >= 365) {
    const years = Math.floor(differenceInDays / 365);
    const remainingDays = differenceInDays % 365;
    return `opened ${years} year${years > 1 ? "s" : ""}${
      remainingDays > 0
        ? ` ${remainingDays} day${remainingDays > 1 ? "s" : ""}`
        : ""
    }  ago`;
  } else if (differenceInDays >= 30) {
    const months = Math.floor(differenceInDays / 30);
    const remainingDays = differenceInDays % 30;
    return `opened ${months} month${months > 1 ? "s" : ""} ${
      remainingDays > 0
        ? ` ${remainingDays} day${remainingDays > 1 ? "s" : ""}`
        : ""
    } ago`;
  } else if (differenceInDays < 1) {
    return "opened recently";
  } else {
    return `opened ${differenceInDays} day${
      differenceInDays > 1 ? "s" : ""
    } ago`;
  }
};
export default calcTimeAgo;
