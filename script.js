// function startCountdown(durationInSeconds) {
//     const countdownElement = document.getElementById("countdown");
    
//     let timer = durationInSeconds;
//     let minutes, seconds;

//     const countdownInterval = setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         countdownElement.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             clearInterval(countdownInterval);
//             countdownElement.textContent = "00:00"; // Optionally, you can add a message when the countdown is done.
//         }
//     }, 1000);
// }

// // Start the countdown with a duration of 5 minutes (300 seconds)
// startCountdown(300);

function updateCountdown() {
    const targetDate = new Date(2024, 0, 1, 0, 0, 0, 0);
    // new Date(year, month, day, hours, minutes, seconds, milliseconds);
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        // Countdown has ended
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days < 10 ? "0" + days : days;
        document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
    }
}

// Set your target date (year, month (0-based index), day, hour, minute, second)
const targetDate = new Date(2023, 0, 1, 0, 0, 0).getTime();

// Update the countdown every second
setInterval(function () {
    updateCountdown(targetDate);
}, 1000);

// Initial update
updateCountdown(targetDate);
