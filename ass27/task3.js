async function fetchGitHubData() {
    try {
        const response = await fetch("https://api.github.com/users/<your-username>");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Login:", data.login);
        console.log("Public Repos:", data.public_repos);

    } catch (error) {
        console.error("Error fetching GitHub data:", error.message);
    }
}

fetchGitHubData();
