import express from 'express'
import root from './root'
import {
  auth, liveid, liveoff, liveon, api
} from './controllers'

const router = express.Router()

router.get('/api/get/speakers', api.getSpeakers)
router.post('/api/get/more-speakers', api.getMoreSpeakers)
router.get('/api/get/sponsors', api.getSponsors)
router.get('/api/get/team/', api.getTeam)
router.get('/liveon', liveon)
router.get('/liveoff', liveoff)
router.get('/liveid/:id', liveid)
router.get('/liveid', liveid)
router.post('/auth', auth)

router.get('*', root)

export default router
