export function formatDate(newDate) {
  let date = new Date(newDate);
  const year = date.getFullYear().toString();
  // getMonth() returns a number between 0 and 11
  const month = `${date.getMonth() + 1}`.padStart(2, "0"); // Convert to string and add padding if necessary
  const day = date.getDate().toString().padStart(2, "0");

  return day + "-" + month + "-" + year;
}

export function formatDateAndTime(newDate) {
  //GET DATE
  const date = new Date(newDate);
  const year = date.getFullYear().toString();
  // getMonth() returns a number between 0 and 11
  const month = `${date.getMonth() + 1}`.toLocaleString(); // Convert to string and add padding if necessary
  const day = date.getDate().toString().padStart(2, "0");

  // GET TIME
  const hour = date.getHours();
  const min = date.getMinutes();

  function monthtoString(month) {
    switch (month) {
      case "1":
        return "Jan.";
        break;
      case "2":
        return "Feb.";
        break;
      case "3":
        return "Mar.";
        break;
      case "4":
        return "Apr.";
        break;
      case "5":
        return "May";
        break;
      case "6":
        return "Jun.";
        break;
      case "7":
        return "Jul.";
        break;
      case "8":
        return "Aug.";
        break;
      case "9":
        return "Sep.";
        break;
      case "10":
        return "Oct.";
        break;
      case "11":
        return "Nov.";
        break;
      case "12":
        return "Dec.";
        break;
      default:
        return null;
    }
  }

  const formatedHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  const ampm = hour < 12 ? 'AM' : 'PM'

//   function timetoTwelvehrBase(hour){
//     if(hour < 12){

//     }
//   }
  return day + " " + monthtoString(month) + " " + year + "," + " " + formatedHour+ ":" + min + ampm;

}
