document.getElementById("fsubmit").addEventListener('click', makeEvent);

var count = 0; // Number of events submitted my user

function makeEvent() {

    count++;

    function iterate() {

        var eventName = futureEvent();

        var seconds = secondsUntil(futureDate());

        var display = eventCounter(seconds, eventName, count);

        updateMsg(display);

    };

    setInterval(iterate, 1000);

}

