const axios = require('axios')
import uuid from './utils/uuid'

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
    'X-Access-Token': '',
    'X-Session-Id': uuid.getUUID()
  }
  return headers
}

const instance = axios.create({
  baseURL: getHost(),
  timeout: 6000,
  headers: headers()
})

export function post(url, params, success) {
  let requestUrl = getHost() + '/' + url
  instance.post(requestUrl, params).then(res => {
    success(res.data)
  }).catch(error => {
    logError(error)
  })
}

export function get(url, success) {
  let requestUrl = getHost() + '/' + url
  instance.get(requestUrl).then(res => {
    success(res.data)
  }).catch(error => {
    logError(error)
  })
}

function logError(error) {
  console.log(error)
}

export default {
  getHost,
  headers,
  post,
  get
}