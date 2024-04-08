const calcDifferenceInDays = (task) => {
  const createdDate = task && new Date(task.created_at);
  let differenceInDays;
  if (createdDate instanceof Date && !isNaN(createdDate.getTime())) {
    const currentDate = new Date();

    const differenceInMilliseconds =
      currentDate.getTime() - createdDate.getTime();

    differenceInDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
  }
  return differenceInDays;
};
export default calcDifferenceInDays;
