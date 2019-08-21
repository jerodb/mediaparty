import axios from 'axios'

const apiKey = process.env.API_KEY
const schedUrl = process.env.SCHED_URL

export default async (req, res) => {
  const { feauteredSpeakers } = req.body
  const fullResponse = {}
  const apiEndpoint = `${schedUrl}/api/role/export?api_key=${apiKey}`

  const endPoints = [
    {
      name: 'moreSpeakers',
      url: `${apiEndpoint}&role=speaker&format=json&strip_html=Y&fields=name,about,url,avatar,username`,
    },
    {
      name: 'executiveTeam',
      url: `${apiEndpoint}&role=artist&format=json&strip_html=Y&fields=name,avatar,username&featured=y`,
    },
    {
      name: 'team',
      url: `${apiEndpoint}&role=artist&format=json&strip_html=Y&fields=name,avatar,username`,
    },
    {
      name: 'sponsors',
      url: `${apiEndpoint}&role=sponsor&format=json&strip_html=Y&fields=level,name,avatar`,
    },
  ]

  const fullSpeakers = await axios.get(endPoints[0].url)
    .then(response => response.data)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error more speakers: ', err)
      return []
    })

  fullResponse.executiveTeam = await axios.get(endPoints[1].url)
    .then(response => response.data)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error executive team: ', err)
      return []
    })

  const fullTeam = await axios.get(endPoints[2].url)
    .then(response => response.data)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error team: ', err)
      return []
    })

  const allSponsors = await axios.get(endPoints[3].url)
    .then(response => response.data)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error sponsors: ', err)
      return []
    })


  let matchSpeaker
  fullResponse.moreSpeakers = []

  fullSpeakers.map(item => {
    matchSpeaker = false
    feauteredSpeakers.map(itemFeatured => {
      if (itemFeatured.username === item.username) { matchSpeaker = true }
      return itemFeatured
    })

    if (matchSpeaker === false) { fullResponse.moreSpeakers.push(item) }

    return item
  })

  let matchTeam
  fullResponse.team = []

  fullTeam.map(item => {
    matchTeam = false
    fullResponse.executiveTeam.map(itemFeatured => {
      if (itemFeatured.username === item.username) { matchTeam = true }
      return itemFeatured
    })

    if (matchTeam === false) { fullResponse.team.push(item) }

    return item
  })

  fullResponse.partners = []
  fullResponse.sponsors = []
  fullResponse.collaborators = []
  fullResponse.recruiters = []

  allSponsors.map(item => {
    const level = item.level && item.level.toLowerCase()

    switch (level) {
      case 'partners':
        fullResponse.partners.push(item)
        break
      case 'platinum':
      case 'gold':
      case 'sponsors':
        fullResponse.sponsors.push(item)
        break
      case 'collaborators':
        fullResponse.collaborators.push(item)
        break
      case 'recruiters':
        fullResponse.recruiters.push(item)
        break
      default:
    }

    return item
  })

  res.json(fullResponse)
}
