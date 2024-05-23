export const formatDate = (date: string | Date) => {
  if (date instanceof Date) return date.toLocaleDateString("pt-br");
  return new Date(date).toLocaleString("pt-br");
};
