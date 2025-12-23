const formatDate = (date: Date | null | undefined): string | undefined => {
  if (!date) return;
  const d = new Date(date);
  return `${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`;
};

export default formatDate;
