//base URL for api
let baseURL = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001';
} else {
  baseURL = 'https://api-dot-jp-conjugation.lm.r.appspot.com';
}

console.log(baseURL)

export { baseURL };
