// **********************
// CONFIG INITIALIZATION
// **********************
import path from 'path'

require('dotenv').config()

const {
  BASE_NAME, GA_TRACKING_ID, HOST, LANG_DEFAULT, NODE_ENV, PORT, SCHED_URL
} = process.env

const ROOT_DIR = path.join(__dirname, 'dist')

export {
  BASE_NAME,
  GA_TRACKING_ID,
  HOST,
  LANG_DEFAULT,
  NODE_ENV,
  PORT,
  ROOT_DIR,
  SCHED_URL,
}
