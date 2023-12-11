function counter(count = 0) {
  setTimeout(function () {
    console.log(count);
    counter(count + 1);
  }, 1000);
}

counter();
