document.getElementById("fsubmit").addEventListener("click", makeEvent);

function makeEvent() {
  let eventName = futureEvent();
  addListItem(eventName);
  let seconds = secondsUntil(futureDate());

  function iterate() {
    seconds--;
    let display = eventCounter(seconds, eventName);
    updateMsg(display, eventName);
  }

  setInterval(iterate, 1000);
}
