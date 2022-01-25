function getFutureEventName() {
  // Retrieve name of event entered by user.
  let eventName = document.getElementById("futureEventName").value;

  // Event name must start with a char as if will be used as a class.
  if (!(/[a-zA-Z]/).test(eventName[0])) return;

  return eventName;
}

function getFutureDate() {
  // Retrieve information from form for new event.
  let futureEventDate = {};
  futureEventDate["date"] = document.getElementById("futureEventDate").value;
  futureEventDate["time"] = document.getElementById("ftime").value;

  let localDate = futureEventDate["date"] + ":" + futureEventDate["time"];
  let futureDate = new Date(localDate).toUTCString();

  return futureDate;
}

function getSecondsUntilEvent(futureDate) {
  // Date object passed from futureDate().

  let eventDate = new Date(futureDate).getTime(); // Convert to milliseconds.

  let convertDateToUTC = new Date().toUTCString(); // Convert current date to UTC.
  let currentDate = new Date(convertDateToUTC).getTime();

  // Convert milliseconds to seconds
  let secondsUntilEvent = eventDate / 1000;
  let currentDateInSeconds = currentDate / 1000;

  let secondsLeft = secondsUntilEvent - currentDateInSeconds;

  return secondsLeft;
}

function displaySecondsCountdown(seconds) {
  // Takes a count of seconds and outputs a message that displays days, hours,
  // minutes, and seconds until event.

  let days = Math.floor(seconds / 86400); // 860400 sec in one day.
  let secs = seconds - days * 86400;

  let hours = Math.floor(secs / 3600);
  secs = secs - hours * 3600;

  let mins = Math.floor(secs / 60);
  secs = secs - mins * 60;

  // This will be the countdown message displayed to the user.
  let eventPhrase = `<span><b>-</b> There are <b>${days}</b> days, <b>${hours}</b> <i>hrs</i>, <b>${mins}</b> <i>mins</i>, and <b>${secs}</b> <i>seconds</i> until&nbsp;</span>`;

  return eventPhrase;
}

function addListItem(className) {
  // Insert a list-item into the #timers un-ordered list with a unique class
  // name that can be targeted.

  let listItem = document.createElement("li");
  listItem.setAttribute("class", `${className}`);
  // Add empty list-item to #timers list.
  document.getElementById("timers").append(listItem);
}

function updateMessage(eventPhrase, className, eventName) {
  // Insert or replace message inside list item.

  const newLine = document.querySelector(`.${className}`);
  newLine.innerHTML = eventPhrase;

  let safeEventName = document.createElement("span");
  safeEventName.setAttribute("style", "font-style: italic; font-weight: bold");
  safeEventName.textContent = eventName;

  // Insert eventName as text within a span, rather than as HTML to prevent scripting attacks.
  newLine.append(safeEventName);
}
