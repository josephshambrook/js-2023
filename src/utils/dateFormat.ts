export const defaultDateFormat: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "2-digit",
};

export const formatDate = (
  dateString: string,
  format: Intl.DateTimeFormatOptions = defaultDateFormat
): string => {
  return new Intl.DateTimeFormat("en-GB", format).format(new Date(dateString));
};
