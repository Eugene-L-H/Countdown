document.getElementById("fsubmit").addEventListener("click", makeEvent);

const eventUserInput = document.getElementById("feventID");
const submitButton = document.getElementById("fsubmit");

eventUserInput.addEventListener("keydown", (e) => {
  if (e == 13) {
    submitButton.click();
  }
});

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
        return 1;
      }
      if (className == classNames[i]) {
        className = className + count;
      }
    }
  }
  count++; // Plus one to count for each className added to classNames.

  // Register current eventName in list of eventNames.
  eventNames.push(eventName);
  classNames.push(className); // same for className

  // create html list item with a class to match eventName(minus spaces and special chars).
  addListItem(className);

  let seconds = secondsUntil(futureDate());
  // Subtract one from seconds variable and update displayed message.
  function iterate() {
    seconds--;
    let display = eventCounter(seconds, eventName);
    updateMsg(display, className);
  }

  setInterval(iterate, 1000);
}
