const utils = {
  getRequest: async (url) => {
    try {
      const res = await fetch(url);
      const resJson = await res.json();
      return resJson;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default utils;
