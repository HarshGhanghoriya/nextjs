export const calculateReadingTime = (text, wordsPerMinute = 200) => {
  let calculatedtext = "";
  text?.map((data) => {
    calculatedtext = calculatedtext + data?.sectionHeading;
    calculatedtext = calculatedtext + data?.sectionText;
  });
  const words = calculatedtext.split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  return Math.ceil(minutes);
};

export const getFormattedDate = (inputDate) => {
  const date = new Date(inputDate);
  const formattedDateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDateString;
};
