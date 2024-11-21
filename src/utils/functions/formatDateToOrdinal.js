function formatDateToOrdinal(dateString) {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getUTCFullYear();

  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th"; // 4th to 20th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}

export default formatDateToOrdinal;
