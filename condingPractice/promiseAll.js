// Promise that resolves after a given time
const tOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (t === 30000) {
        reject(`Rejected in ${t}`);
      } else {
        resolve(`Completed in ${t}`);
      }
    }, t);
  });
};

const durations = [1000, 2000, 3000];

// Array contains some time durations
const promises = []; //empty array

durations.forEach((duration) => {
  promises.push(tOut(duration));
  // Pushing durations in the promises array
});

// Passing an array of pending promises to Promise.all
Promise.all(promises)
  .then((response) => console.log(response))
  // Promise.all cannot be resolved, as one of the
  // promises passed, got rejected.

  .catch((error) => console.log(`::Error::<br> ${error}`));
// Promise.all throws an error.
