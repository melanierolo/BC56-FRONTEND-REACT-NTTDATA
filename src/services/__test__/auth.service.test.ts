import { loginUser } from "@services/auth.service";

const API_PUBLIC = "https://dummyjson.com";

const mockFetch = (data: unknown, status = 200, ok = true): jest.Mock => {
  return jest.fn().mockImplementationOnce(() => {
    return Promise.resolve({
      ok,
      status,
      json: jest.fn().mockResolvedValue(data),
    });
  });
};

describe("loginUser", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return success true and data when login is successful", async () => {
    global.fetch = mockFetch({ token: "fake-token" });

    const result = await loginUser("testuser", "testpassword");

    expect(fetch).toHaveBeenCalledWith(`${API_PUBLIC}/auth/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username: "testuser",
        password: "testpassword",
      }),
    });
    expect(result).toEqual({ success: true, data: { token: "fake-token" }, status: 200 });
  });

  it("should return success false and status when login fails", async () => {
    global.fetch = mockFetch({}, 401, false);

    const result = await loginUser("testuser", "wrongpassword");

    expect(fetch).toHaveBeenCalledWith(`${API_PUBLIC}/auth/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username: "testuser",
        password: "wrongpassword",
      }),
    });
    expect(result).toEqual({ success: false, status: 401 });
  });

  it("should return success false and error message when fetch throws an error", async () => {
    const mockError = new Error("Network error");
    global.fetch = jest.fn().mockRejectedValue(mockError);

    const result = await loginUser("testuser", "testpassword");

    expect(fetch).toHaveBeenCalledWith(`${API_PUBLIC}/auth/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username: "testuser",
        password: "testpassword",
      }),
    });
    expect(result).toEqual({ success: false, message: "Network error" });
  });
});
