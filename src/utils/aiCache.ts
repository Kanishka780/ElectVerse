const cache = new Map<string, string>();

export const getCached = (key: string) => {
  return cache.get(key);
};

export const setCached = (key: string, value: string) => {
  cache.set(key, value);
};
