import { FetchRequest } from './contracts'

const baseApi = 'http://localhost:3000/'

const callApiBase = (endpoint: string, call: FetchRequest) => {
  const {
    method = 'GET',
    params = {},
    body = {},
    showJSON = false,
    showConsoleLog = false,
    title = '',
    headers = {},
  } = call;

  // Config Headers
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const requestHeader: HeadersInit = new Headers({ ...headers, ...defaultHeaders })
  const fullyEndpoint = `${baseApi}${endpoint}`

  if (showConsoleLog) {
    console.log(`[${title} - CALL API COMPLETE]`, {
      requestHeader,
      method,
      endpoint,
      params,
      body: JSON.stringify(body),
    });
  }

  if (showJSON) {
    console.log(`[${title} - CALL API JSON BODY]`, JSON.stringify(body));
  }

  if (method === 'GET' || method === 'DELETE') {
    const improvedEndpoint = `${fullyEndpoint}/${new URLSearchParams(params).toString()}`
    return fetch(improvedEndpoint, {
      headers: requestHeader,
      method,
    }).then(res => res.json());
  }

  return fetch(fullyEndpoint, {
    headers: requestHeader,
    method,
    body: JSON.stringify(body),
  }).then(res => res.json());
};

export default callApiBase;
export { callApiBase };
