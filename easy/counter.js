function counter() {
  let i = 0;
  setInterval(function () {
    console.log(i);
    i++;
  }, 1000);
}

counter();
