import useAuthStore from "src/store/user";

const requestRefreshToken = async () => {
  const { accessToken, setRefreshAndAccessAndExpireTime } =
    useAuthStore.getState();

  const requestRefreshToken = fetch("http://localhost:3000/api/refresh-token", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      accessToken,
    }),
  });

  if ((await requestRefreshToken).status === 401) {
    console.error("Unauthorized! Please log in again.");
    location.href = "/login";
  }

  if ((await requestRefreshToken).ok) {
    const { accessToken, refreshToken, expireTime } = await (
      await requestRefreshToken
    ).json();
    setRefreshAndAccessAndExpireTime(refreshToken, accessToken, expireTime);
  }
};

export default requestRefreshToken;
