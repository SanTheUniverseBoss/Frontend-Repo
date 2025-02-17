const API_URL = "https://your-backend-url.com/api"; // Replace with actual backend URL

export const saveLayout = async (userId, layout) => {
  try {
    const response = await fetch(`${API_URL}/save-layout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, layout }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error saving layout:", error);
  }
};

export const loadLayout = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/load-layout/${userId}`);
    return await response.json();
  } catch (error) {
    console.error("Error loading layout:", error);
  }
};
