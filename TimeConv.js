function timeConversion(s) {
  let part = s.includes("AM");
  let [hour, minute, second0] = s.split(":");
  let second = second0.substring(0, 2);

  if (part && hour === "12") {
    hour = "00";
    console.log(`${hour}:${minute}:${second}`);
  } else if (part) {
    console.log(`${hour}:${minute}:${second}`);
  } else {
    if (hour !== "12") {
      let newHour = Number(hour) + 12;
    } else {
      let newHour = hour;
    }
    console.log(`${newHour}:${minute}:${second}`);
  }
}

timeConversion("12:45:54PM");
