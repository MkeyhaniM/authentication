import useAuthStore from "src/store/user";

const requestRefreshToken = async () => {
  const { accessToken } = useAuthStore();
  const refreshToken = fetch("http://localhost:3000/api/refresh-token", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accessToken,
    }),
  });

  if ((await refreshToken).status === 401) {
    console.error("Unauthorized! Please log in again.");
    location.href = "/login";
  }

  return (await refreshToken).json();
};

export default requestRefreshToken;
