fetch("https://api.github.com/users/<your-username>")
  .then(response => response.json())
  .then(data => {
    console.log("GitHub Profile Data:", data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
