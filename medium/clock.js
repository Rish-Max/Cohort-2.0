function printTimer(enableTwelvehourTimer) {
  let time = new Date();
  let hours = enableTwelvehourTimer
    ? time.getHours() > 12
      ? time.getHours() - 12
      : time.getHours()
    : time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();

  setTimeout(() => {
    console.log(
      `${hours}:${mins}:${secs} ${
        enableTwelvehourTimer ? (time.getHours() > 12 ? "PM" : "AM") : ""
      }`
    );
    printTimer(enableTwelvehourTimer);
  }, 1000);
}

printTimer();
