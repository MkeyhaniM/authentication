import requestNewAccessToken from "src/fetch/requestRefreshToken";
import isExpiredAccessToken from "./isExpiredAccessToken";

const wrapperCheckExpireTime = async (request: Function) => {
  const isExpired = isExpiredAccessToken();

  if (isExpired) {
    await requestNewAccessToken();
  }

  return request;
};

export default wrapperCheckExpireTime;
