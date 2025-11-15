function delayedTask(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}

delayedTask(() => {
  console.log("Task Completed");
});
