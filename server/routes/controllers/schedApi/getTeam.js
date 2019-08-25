const apiKey = process.env.API_KEY
const schedUrl = process.env.SCHED_URL

export default async (req, res) => {
  const apiEndpoint = `${schedUrl}/api/role/export?api_key=${apiKey}`

  const uri = `${apiEndpoint}&role=artist&format=json&strip_html=Y&fields=name,avatar,username,tags`
  const hosts = []
  const team = []

  fetch(uri)
    .then(response => {
      response.json().then(resp => {
        resp.map(item => {
          if (item.tags.includes('team')) {
            team.push(item)
          }

          if (item.tags.includes('host')) {
            hosts.push(item)
          }
        })

        res.json({ team, hosts })
      })
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error featured speakers: ', err)
      return res.json([])
    })
}
