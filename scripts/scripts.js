document.getElementById("fsubmit").addEventListener("click", makeEvent);

// Displayed above 'Event Name' input field when called.
const errorMessage = document.getElementsByClassName("error")[0];

count = 0; // Increments by one for each className added to classNames.
let eventNames = [];
let classNames = [];

function makeEvent() {
  // Retrieve event name entered by user.
  let eventName = getFutureEventName();

  if (count === 10) {
    errorMessage.textContent = 'Max events registered';
    errorMessage.classList.remove('hidden');
    return;
  }

  if (eventName === "") {
    return;
  }

  // Regex to remove whitespace from className.
  let className = eventName.replace(/\s+/g, "");
  // Remove special chars.
  className = className.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );

  // Check if class name already exists:
  if (count > 0) {
    for (let i = 0; i < classNames.length; i++) {
      if (eventName === eventNames[i]) {
        errorMessage.textContent = 'That event has already been registered.'
        errorMessage.classList.remove("hidden");
        return;
      }
      if (className === classNames[i]) {
        className = className + count;
      }
    }
  }
  count++; // Plus one to count for each className added to classNames.

  // If eventName is unique there is no error. Error msg can be hidden.
  errorMessage.classList.add("hidden");

  // Register current eventName in list of eventNames.
  eventNames.push(eventName);
  classNames.push(className); // same for className

  // create html list item with a class to match eventName(minus spaces and special chars).
  addListItem(className);

  let seconds = getSecondsUntilEvent(getFutureDate());

  // Subtract one from seconds variable and update displayed message.
  let eventPhrase = displaySecondsCountdown(seconds);
  updateMessage(eventPhrase, className, eventName);

  function iterate() {
    seconds--;
    eventPhrase = displaySecondsCountdown(seconds);
    updateMessage(eventPhrase, className, eventName);
  }

  setInterval(iterate, 1000);
}
