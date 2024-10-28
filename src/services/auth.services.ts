const API_PUBLIC = "https://dummyjson.com";

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await fetch(`${API_PUBLIC}/auth/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, message: errorData.message || "Authentication error" };
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error ocurred";

    console.error("Login failed: ", errorMessage);
    return { success: false, message: errorMessage };
  }
};
