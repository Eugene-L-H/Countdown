function futureEvent() {
    // Retrieve name of event entered by user
    var eventName = document.getElementById("feventID").value;

    return eventName;

}


function futureDate() {
    // Retrieve information from form for new event
    var fDate = {};
    fDate["date"] = document.getElementById("fdate").value;
    fDate["time"] = document.getElementById("ftime").value;

    var localDate = fDate["date"] + ":" + fDate["time"];
    var eventDate = new Date(localDate).toUTCString();

    return eventDate;

}


function secondsUntil(date) {
    // Date object passed from futureDate()

    var eventDate = new Date(date).getTime(); // Convert to milliseconds

    var cdUTC = new Date().toUTCString(); // Convert current date to UTC
    var currentDate = new Date(cdUTC).getTime();

    // Convert milliseconds to seconds
    var s1 = eventDate / 1000;
    var s2 = currentDate / 1000;

    var secondsLeft = s1 - s2;

    return secondsLeft;

}

function eventCounter(seconds, event) {
    // Takes a count of seconds and outputs days, hours, minutes, seconds

    var days = Math.floor(seconds / 86400); // 860400 sec in one day
    var secs = seconds - (days * 86400);

    var hours = Math.floor(secs / 3600);
    secs = secs - (hours * 3600);

    var mins = Math.floor(secs / 60);
    secs = secs - (mins * 60);

    var eventPhrase = "<br>" + "<p class='eventPhase'>" + "There are " + days + " days " + hours + " hrs " + mins + " min and " + secs + " secs until " + event + "</p>";

    return eventPhrase;

}

function updateMsg(message) {
    // Seconds countdown

    return document.getElementById("timer").innerHTML += message;

}



