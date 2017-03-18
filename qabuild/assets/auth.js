var timer = getInitialTimer();
var tokenUrl = 'https://196.43.215.157/UserSecurityApi/api/v1/Account/ReissueToken';
$(document).ready(initTokenizer);

// initalize and trigger tokenizer
function initTokenizer() {
    setInterval(function() {
        if (tokenIsAvailable()) {
            timer++;
            updateTimer(timer);
            checkAndRevalidateToken();
        }
    }, 2000);
}

// update timer
function updateTimer(timer) {
    sessionStorage.setItem('alat-auth-timer', timer);
    sessionStorage.setItem('alat-auth-time', Date.now());
}

// checks if token is available
function tokenIsAvailable() {
    return !!sessionStorage.getItem('alat-token');
}

// checks to see if token has expired and revalidates
function checkAndRevalidateToken() {
    if (timeHasElapsed()) {
        revalidateToken(function(err, data) {
            if (data) {
                sessionStorage.setItem('alat-token', data);
            }
            resetTimer();
        });
    }
}

// returns true or false depending whether token has expired or not
function timeHasElapsed() {
    return 240 < timer;
}

// resets the timer and updates it in local storage
function resetTimer() {
    timer = 0;
    sessionStorage.setItem('alat-auth-timer', timer);    
}

// revalidates token after token has expired
function revalidateToken(cb) {
    fetchNewToken(function (err, data) {
        if (err) {
            cb(err);
        } else {
            cb(data);
        }
    });
}


// makes call to endpoint to fetch token
function fetchNewToken(cb) {
    $( document ).ready(function() {
        $.ajax({
        url: tokenUrl,
        type: "GET",
        headers: { 
            "Accept" : "application/json; charset=utf-8",
            "Content-Type": "application/json; charset=utf-8",
            'alat-client-apiKey': 'ERTojertoijertoijert',
            'Authorization': 'Bearer',
            'alat-token': getToken()
            }
        }).done(function (data) {
            cb(null, data);
        }).fail(function(xhr, status, error) {
            cb(error);
        });
    });
}

// fetches the token that has been stored on the browser
function getToken() {
    return sessionStorage.getItem('alat-token');
}

function getInitialTimer() {
    var initialTime = sessionStorage.getItem('alat-auth-time');
    if (initialTime) {
        return calcInitialTimer(initialTime);
    } else {
        return 0;
    }
}

function calcInitialTimer(initialTime) {
    var time = Date.now() - initialTime;
    return Number(sessionStorage.getItem('alat-auth-timer')) + Math.floor( time / 1000);
}