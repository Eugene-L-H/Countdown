document.getElementById("fsubmit").addEventListener("click", makeEvent);

let count = 0; // Number of events submitted my user

function makeEvent() {
  count++;

  let eventName = futureEvent();

  addListItem(eventName);

  let seconds = secondsUntil(futureDate());

  function iterate() {
    seconds--;
    let display = eventCounter(seconds, eventName, count);

    updateMsg(display, eventName);
  }

  setInterval(iterate, 1000);
}
