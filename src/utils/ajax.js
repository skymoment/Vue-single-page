const axios = require('axios')

const domain = {
  "http://m.jdh.daidianhua.com": "http://api.jdh.daidianhua.com",
  "default": "http://api.jdh.test1.cestcoco.com"
  // "default": "http://api.jdh.daidianhua.com"
}

export function getHost() {
  let host = domain[location.origin]
  if (host && host.length > 0) {
    host = domain[location.origin]
  } else {
    host = domain['default']
  }
  return host
}

export function headers() {
  let headers = {
    'Accept': 'application/json',
    'X-App-Id': 'jdh_h5',
    'X-Access-Token': ''
  }
  return headers
}

const instance = axios.create({
  baseURL: getHost(),
  timeout: 60,
  headers: headers()
})

export function post(url, params, success) {
  let requestUrl = host + '/' + url
  instance.post(requestUrl, params).then(res => {
    console.log(res)
    success(res)
  }).catch(error => {
    console.log(error)
  })
}

export function get(url, success) {
  let requestUrl = host + '/' + url
  instance.get(requestUrl).then(res => {
    console.log(res)
    success(res)
  }).catch(error => {
    console.log(error)
  })
}