const http = {
  get(url, params, options) {
    const parseMethod = options ? options.parse : 'json';
    let getUrl = url.replace('/api/', `${process.env.REACT_APP_API}/`);
    let parse;

    if (params) {
      const getParams = new URLSearchParams(Object.entries(params));
      getUrl = `${getUrl}?${getParams}`;
    }

    if (parseMethod === 'none') parse = res => res;
    else parse = res => res[parseMethod]();

    return fetch(getUrl)
      .then((response) => {
        if (response.status === 200) {
          return parse(response);
        }
        throw new Error(response.statusText);
      });
  },

  post(url, body, options) {
    const parseMethod = options ? options.parse : 'json';
    const postUrl = url.replace('/api/', `${process.env.REACT_APP_API}/`);
    const myInit = {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };

    if (localStorage.getItem('userToken')) myInit.headers.Authorization = `Bearer ${localStorage.getItem('userToken')}`;
    let parse;

    if (parseMethod === 'none') parse = res => res;
    else parse = res => res[parseMethod]();

    return fetch(postUrl, myInit)
      .then((response) => {
        if (response.status === 200) {
          return parse(response);
        }
        throw new Error(response.statusText);
      });
  },
};

export default http;
