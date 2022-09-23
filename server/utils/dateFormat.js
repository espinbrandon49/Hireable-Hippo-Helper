const addDateSuffix = (date) => {

  let dateStr = date.toString();


  // get last char of date string
  const lastChar = dateStr.charAt(dateStr.length - 1);

  if (lastChar === '1' && dateStr !== '11') {
    dateStr = `${dateStr}st`;
  } else if (lastChar === '2' && dateStr !== '12') {
    dateStr = `${dateStr}nd`;
  } else if (lastChar === '3' && dateStr !== '13') {
    dateStr = `${dateStr}rd`;
  } else {
    dateStr = `${dateStr}th`;
  }
  return dateStr;
};

// function to format a timestamp, accepts the timestamp and an `options` object as parameters
module.exports = () => {
  let result = "";
  // let month;
  // switch ((d.getMonth() + 1)) {
  //   case "1":
  //     month = "January";
  //     break;
  //   case "2":
  //     month = "Febuary";
  //     break;
  //   case "3":
  //     month = "March";
  //     break;
  //   case "4":
  //     month = "April";
  //     break;
  //   case "5":
  //     month = "May";
  //     break;
  //   case "6":
  //     month = "June";
  //     break;
  //   case "7":
  //     month = "July";
  //     break;
  //   case "8":
  //     month = "August";
  //     break;
  //   case "8":
  //     month = "September";
  //     break;
  //   case "10":
  //     month = "October";
  //     break;
  //   case "11":
  //     month = "November";
  //     break;
  //   case "12":
  //     month = "December";
  //     break;
  //   default: "January";
  // }

  var d = new Date();
  result += (d.getMonth() + 1) + "/" + d.getDate()+ "/" + d.getFullYear()

  const formattedTimeStamp = result;

  return formattedTimeStamp;
};
