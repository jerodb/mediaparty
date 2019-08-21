const apiKey = process.env.API_KEY
const schedUrl = process.env.SCHED_URL

export default async (req, res) => {
  const { feauteredSpeakers } = req.body
  const apiEndpoint = `${schedUrl}/api/role/export?api_key=${apiKey}`

  const uri = `${apiEndpoint}&role=speaker&format=json&strip_html=Y&fields=name,about,url,avatar,username`

  const fullSpeakers = await fetch(uri)
    .then(response => (
      response.json().then(resp => resp)
    ))
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error getting more speakers: ', err)
      return []
    })

  let matchSpeaker
  const moreSpeakers = []

  fullSpeakers.map(item => {
    matchSpeaker = false
    feauteredSpeakers.map(itemFeatured => {
      if (itemFeatured.username === item.username) { matchSpeaker = true }
      return itemFeatured
    })

    if (matchSpeaker === false) { moreSpeakers.push(item) }

    return item
  })

  return res.json(moreSpeakers)
}
