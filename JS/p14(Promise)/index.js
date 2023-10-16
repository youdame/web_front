const p = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve('Hello');
  // }, 2000);


  setTimeout(() => { reject(new Error('fail')); }, 2000);
});