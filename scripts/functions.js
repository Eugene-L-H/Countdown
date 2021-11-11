function futureEventName() {
  // Retrieve name of event entered by user.
  let eventName = document.getElementById("feventID").value;

  return eventName;
}

function futureDate() {
  // Retrieve information from form for new event.
  let fDate = {};
  fDate["date"] = document.getElementById("fdate").value;
  fDate["time"] = document.getElementById("ftime").value;

  let localDate = fDate["date"] + ":" + fDate["time"];
  let futureDate = new Date(localDate).toUTCString();

  return futureDate;
}

function secondsUntil(futureDate) {
  // Date object passed from futureDate().

  let eventDate = new Date(futureDate).getTime(); // Convert to milliseconds.

  let cdUTC = new Date().toUTCString(); // Convert current date to UTC.
  let currentDate = new Date(cdUTC).getTime();

  // Convert milliseconds to seconds
  let s1 = eventDate / 1000;
  let s2 = currentDate / 1000;

  let secondsLeft = s1 - s2;

  return secondsLeft;
}

function eventCounter(seconds, eventName) {
  // Takes a count of seconds and outputs days, hours, minutes, seconds.

  let days = Math.floor(seconds / 86400); // 860400 sec in one day.
  let secs = seconds - days * 86400;

  let hours = Math.floor(secs / 3600);
  secs = secs - hours * 3600;

  let mins = Math.floor(secs / 60);
  secs = secs - mins * 60;

  // This will be the countdown message displayed to the user.
  let eventPhrase = `<p><b>-</b> There are <b>${days}</b> days, <b>${hours}</b> <i>hrs</i>, <b>${mins}</b> <i>mins</i>, and <b>${secs}</b> <i>seconds</i> until <b><i>${eventName}</i></b></p>`;

  return eventPhrase;
}

function addListItem(className) {
  let listItem = document.createElement("li");
  listItem.setAttribute("class", `${className}`);
  document.getElementById("timers").append(listItem);
}

function updateMsg(message, className) {
  // Seconds countdown
  return (document.querySelector(`.${className}`).innerHTML = message);
}
