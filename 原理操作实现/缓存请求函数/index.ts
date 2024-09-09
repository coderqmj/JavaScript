function memorizedFn(fun) {
  const cache = new Map();

  return async function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Returning cached value");
      return cache.get(key);
    }
    const result = await fun(...args);
    cache.set(key, result);
    return result;
  };
}
