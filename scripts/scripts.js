document.getElementById("fsubmit").addEventListener('click', makeEvent);

function makeEvent() {

    var eventName = futureEvent();

    function iterate() {

        var seconds = secondsUntil(futureDate());

        var display = eventCounter(seconds, eventName);

        updateMsg(display);

    };

    setInterval(iterate, 1000);

}

