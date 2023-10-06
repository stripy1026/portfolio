export const calculateDayPassed = (startDay: Date) => {
  const today = new Date();
  const diffMsec = today.getTime() - startDay.getTime();
  const day = Math.floor(diffMsec / (1000 * 60 * 60 * 24));
  return day;
};
