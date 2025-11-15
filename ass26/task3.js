function fetchData(callback) {
  setTimeout(() => {
    callback("Data received using callback");
  }, 2000);
}


function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received using Promise");
    }, 2000);
  });
}

fetchDataPromise().then((data) => console.log(data));
