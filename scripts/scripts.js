document.getElementById("fsubmit").addEventListener("click", makeEvent);

count = 0; // Increments by one for each className added to classNames.
let classNames = [];

function makeEvent() {
  // Retrieve event name entered by user.
  let eventName = futureEventName();

  // Regex to replace whitespace with underscores so variablel
  let className = eventName.replace(/\s+/g, "");
  className = className.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );

  // Register current className in list of classNames.
  classNames.push(className);

  // Check if class name already exists:
  if (count > 0) {
    for (let i = 0; i < classNames.length; i++) {
      if (className == classNames[i]) {
        className = className + count;
      }
    }
  }
  count++; // Plus one to count for each className added to classNames.

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
