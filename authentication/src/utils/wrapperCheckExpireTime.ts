import requestNewAccessToken from "src/fetch/requestRefreshToken";
import isExpiredAccessToken from "./isExpiredAccessToken";
import useAuthStore from "src/store/user";

const wrapperCheckExpireTime = async (request: Function): Promise<any> => {
  const { expireTime } = useAuthStore.getState();

  const isExpired = isExpiredAccessToken(expireTime as number);

  if (isExpired) {
    console.log("Access token expired. Refreshing...");
    await requestNewAccessToken();
  }

  console.log("Making protected request...");
  return request();
};

export default wrapperCheckExpireTime;
