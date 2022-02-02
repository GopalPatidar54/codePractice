let a = 1;
async function promiseFun(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a == 1) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 5000);
  });
}
async function name1(params) {
  let returnData = await promiseFun();
  console.log("🚀 ~ file: promise.js ~ line 9 ~ pro ~ pro", returnData);
}

name1();
