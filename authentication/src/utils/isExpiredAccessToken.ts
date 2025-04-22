const isExpiredAccessToken = (expireTime: number): boolean => {
  if ((expireTime as number) > Date.now()) {
    return true;
  }
  return false;
};

export default isExpiredAccessToken;
