export async function fetchGitHubUsersByLanguage(language) {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=language:${language}`);
      const data = await response.json();
  
      const usersData = await Promise.all(
        data.items.slice(0, 10).map(async (user) => {
          const userRes = await fetch(user.url);
          const userData = await userRes.json();
          return userData;
        })
      );
  
      return usersData;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
  