let baseURL = ''
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001'
} else {
  baseURL = 'https://api-dot-jp-conjugation-365812.lm.r.appspot.com'
}

export {
  baseURL
}