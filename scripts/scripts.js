document.getElementById("fsubmit").addEventListener("click", makeEvent);

function makeEvent() {
  // Retrieve event name entered by user.
  let eventName = futureEventName();

  // Regex to replace whitespace with underscores so variable
  let className = eventName.replace(/\s+/g, "");
  className = className.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );
  // create list item with a class to match eventName(minus spaces and special chars).
  addListItem(className);

  let seconds = secondsUntil(futureDate());
  // Minus one from seconds variable and update displayed message.
  function iterate() {
    seconds--;
    let display = eventCounter(seconds, eventName);
    updateMsg(display, className);
  }

  setInterval(iterate, 1000);
}
