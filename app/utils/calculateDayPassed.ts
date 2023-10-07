export const calculateDayPassed = (startDay: Date) => {
  const today = new Date();
  const modifiedDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );
  const diffMsec = modifiedDay.getTime() - startDay.getTime();
  const day = Math.floor(diffMsec / (1000 * 60 * 60 * 24));
  return day;
};
