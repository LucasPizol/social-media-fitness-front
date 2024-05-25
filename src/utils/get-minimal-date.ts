export const getMinimalDate = (timezone: Date | string): string => {
  const date = timezone instanceof Date ? timezone : new Date(timezone);
  const now = new Date();

  const differenceDays = diffDays(now, date);

  if (differenceDays < 1) return Math.floor(differenceDays * 60) + "h";
  if (differenceDays <= 7) return Math.floor(differenceDays) + "d";
  if (differenceDays <= 365) return Math.floor(differenceDays) + "m";

  return Math.floor(differenceDays) + "a";
};

export const diffDays = (afterDate: Date, beforeDate: Date) => {
  return (afterDate.getTime() - beforeDate.getTime()) / (1000 * 60 * 60 * 24);
};
