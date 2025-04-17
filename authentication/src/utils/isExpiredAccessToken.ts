import useAuthStore from "src/store/user";

const isExpiredAccessToken = (): boolean => {
  const { expireTime } = useAuthStore();

  if ((expireTime as number) > Date.now()) {
    return true;
  }
  return false;
};

export default isExpiredAccessToken;
