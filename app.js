let HomeScore = document.getElementById("home-score");
let GuestScore = document.getElementById("guest-score");
let HomePoints = 0;
let GuestPoints = 0;

function addOneHome() {
    HomePoints += 1;
    HomeScore.textContent = HomePoints;
}

function addTwoHome() {
    HomePoints += 2;
    HomeScore.textContent = HomePoints;
}

function addThreeHome() {
    HomePoints += 3;
    HomeScore.textContent = HomePoints;
}

function homeReset() {
    HomePoints = 0;
    HomeScore.textContent = HomePoints;
}

function addOneGuest() {
    GuestPoints += 1;
    GuestScore.textContent = GuestPoints;
}

function addTwoGuest() {
    GuestPoints += 2;
    GuestScore.textContent = GuestPoints;
}

function addThreeGuest() {
    GuestPoints += 3;
    GuestScore.textContent = GuestPoints;
}

function guestReset() {
    GuestPoints = 0;
    GuestScore.textContent = GuestPoints;
}