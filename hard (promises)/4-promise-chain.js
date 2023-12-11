/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((res) => {
    setTimeout(res(t), t);
  });
}

function wait2(t) {
  return new Promise((res) => {
    setTimeout(res(t), t);
  });
}

function wait3(t) {
  return new Promise((res) => {
    setTimeout(res(t), t);
  });
}

async function promiseChain(t1, t2, t3) {
  let time = 0;
  time = time + (await wait1(t1));
  time = time + (await wait2(t2));
  time = time + (await wait3(t3));
  return Promise.resolve(time);
}

async function calculateTime(t1, t2, t3) {
  return (await promiseChain(t1, t2, t3)) * 1000;
}

module.exports = calculateTime;
