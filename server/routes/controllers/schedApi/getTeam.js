const apiKey = process.env.API_KEY
const schedUrl = process.env.SCHED_URL

export default async (req, res) => {
  const apiEndpoint = `${schedUrl}/api/role/export?api_key=${apiKey}`

  const uri = `${apiEndpoint}&role=artist&format=json&strip_html=Y&fields=name,avatar,username`

  fetch(uri)
    .then(response => {
      response.json().then(resp => res.json(resp))
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error featured speakers: ', err)
      return res.json([])
    })
}

/*
import axios from 'axios'

const apiKey = process.env.API_KEY
const schedUrl = process.env.SCHED_URL

export default async (req, res) => {
  const fullResponse = {}
  const apiEndpoint = `${schedUrl}/api/role/export?api_key=${apiKey}`

  const endPoints = [
    {
      name: 'executiveTeam',
      url: `${apiEndpoint}&role=artist&format=json&strip_html=Y&fields=name,avatar,username&featured=y`,
    },
    {
      name: 'team',
      url: `${apiEndpoint}&role=artist&format=json&strip_html=Y&fields=name,avatar,username`,
    },
  ]

  fullResponse.executiveTeam = await axios.get(endPoints[0].url)
    .then(response => response.data)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error executive team: ', err)
      return []
    })

  const fullTeam = await axios.get(endPoints[1].url)
    .then(response => response.data)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error team: ', err)
      return []
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

  res.json(fullResponse)
}
*/
