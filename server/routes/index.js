import express from 'express'
import root from './root'
import {
  auth, liveid, liveoff, liveon, getUsersFront
} from './controllers'

const router = express.Router()

router.get('/api/user/front', getUsersFront)
router.get('/liveon', liveon)
router.get('/liveoff', liveoff)
router.get('/liveid/:id', liveid)
router.get('/liveid', liveid)
router.post('/auth', auth)

router.get('*', root)

export default router
