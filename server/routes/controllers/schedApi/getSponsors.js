const apiKey = process.env.API_KEY
const schedUrl = process.env.SCHED_URL

export default async (req, res) => {
  const apiEndpoint = `${schedUrl}/api/role/export?api_key=${apiKey}`

  const uri = `${apiEndpoint}&role=sponsor&format=json&strip_html=Y&fields=level,name,avatar`

  const allSponsors = await fetch(uri)
    .then(response => (
      response.json().then(resp => resp)
    ))
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error getting sponsors: ', err)
      return res.json([])
    })

  const response = {
    partners: [],
    sponsors: [],
    collaborators: [],
    recruiters: [],
  }

  allSponsors.map(item => {
    const level = item.level && item.level.toLowerCase()

    switch (level) {
      case 'partners':
        response.partners.push(item)
        break
      case 'platinum':
      case 'gold':
      case 'sponsors':
        response.sponsors.push(item)
        break
      case 'collaborators':
        response.collaborators.push(item)
        break
      case 'recruiters':
        response.recruiters.push(item)
        break
      default:
    }

    return item
  })

  return res.json(response)
}
