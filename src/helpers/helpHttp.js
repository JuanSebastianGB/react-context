export const helpHttp = () => {
  /**
   * It's a wrapper for the native fetch API that adds a timeout of 3 seconds and a default header
   * @param endpoint - The URL to which the request is sent.
   * @param options - {
   * @returns A function that takes two arguments, endpoint and options.
   */
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: 'application/json',
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || 'GET';
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject(
              new Error({
                err: true,
                status: res.status || '00',
                statusText: res.statusText || 'Ocurred an error',
              })
            )
      )
      .catch(err => err);
  };

  /**
   * It's a wrapper around the native fetch API that allows you to pass in a custom fetch function
   * @param url - The URL to fetch.
   * @param [options] - This is an object that contains the following properties:
   */
  const get = (url, options = {}) => customFetch(url, options);

  /**
   * It takes a URL and an options object, sets the options object's method property to POST, and then
   * calls the customFetch function with the URL and options object
   * @param url - The URL to fetch.
   * @param [options] - This is an object that contains the following properties:
   * @returns A function that takes two parameters, url and options.
   */
  const post = (url, options = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };

  /**
   * It takes a URL and an options object, sets the method property of the options object to 'PUT', and
   * then calls the customFetch function with the URL and the options object
   * @param url - The URL to fetch.
   * @param [options] - This is an object that contains the following properties:
   * @returns A function that takes two parameters, url and options.
   */
  const put = (url, options = {}) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };

  /**
   * It takes a URL and an options object, sets the options object's method property to 'DELETE', and
   * then calls the customFetch function with the URL and the options object
   * @param url - The url to make the request to.
   * @param [options] - This is an object that contains the following properties:
   * @returns A function that takes two parameters, url and options.
   */
  const del = (url, options = {}) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
