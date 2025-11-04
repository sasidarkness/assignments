
function doTask(callback) {
  console.log("Performing task...");
  
 
  setTimeout(() => {
    console.log("Task finished!");
    
   
    callback();
  }, 1000);
}


function taskComplete() {
  console.log("Task Complete!");
}


doTask(taskComplete);
