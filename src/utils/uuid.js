const uuidv4 = require('uuid/v4')
import localStore from './localStore.js'

export function generateUUID() {
  return uuidv4()
}

export function getUUID() {
  let storeUUID = localStore.get('uuid')
  if (storeUUID && storeUUID !== '') {
    return storeUUID
  } else {
    let uuid = generateUUID()
    localStore.set('uuid', uuid)
    return uuid
  }
}

export default {
  generateUUID,
  getUUID
}