async function fetchUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

   
    if (!response.ok) {
      throw new Error(`User not found: ${username}`);
    }

    const data = await response.json();
    console.log("User Data:", data);

  } catch (error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
  }
}


fetchUser("this_user_does_not_exist_12345");
