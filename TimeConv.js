function timeConversion(s) {
  const timer = s.includes("AM") ? "AM" : "PM";
  const noTimer = s.split(timer)[0];
  let [hours, minutes, sec] = noTimer.split(":");
  if (timer === "PM" && hours != 12) {
    hours = parseInt(hours, 10) + 12;
  }
  if (timer === "AM" && hours == 12) {
    hours = "00";
  }

  return `${hours}:${minutes}:${sec}`;
}

timeConversion("07:05:45AM");
