document.getElementById("fsubmit").addEventListener("click", makeEvent);

const errorMsg = document.getElementsByClassName("error")[0];

count = 0; // Increments by one for each className added to classNames.
let eventNames = [];
let classNames = [];

function makeEvent() {
  // Retrieve event name entered by user.
  let eventName = futureEventName();

  if (eventName == "") {
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
      if (eventName == eventNames[i]) {
        errorMsg.classList.remove("hidden");
        return;
      }
      if (className == classNames[i]) {
        className = className + count;
      }
    }
  }
  count++; // Plus one to count for each className added to classNames.

  // If eventName is unique there is no error. Error msg can be hidden.
  errorMsg.classList.add("hidden");

  // Register current eventName in list of eventNames.
  eventNames.push(eventName);
  classNames.push(className); // same for className

  // create html list item with a class to match eventName(minus spaces and special chars).
  addListItem(className);

  let seconds = secondsUntil(futureDate());

  // Subtract one from seconds variable and update displayed message.
  let eventPhrase = eventCounter(seconds);
  updateMsg(eventPhrase, className, eventName);

  function iterate() {
    seconds--;
    eventPhrase = eventCounter(seconds);
    updateMsg(eventPhrase, className, eventName);
  }

  setInterval(iterate, 1000);
}
