const apiKey = process.env.API_KEY
const schedUrl = process.env.SCHED_URL

export default async (req, res) => {
  const apiEndpoint = `${schedUrl}/api/role/export?api_key=${apiKey}`

  const uri = `${apiEndpoint}&role=artist&format=json&strip_html=Y&fields=name,avatar,username,tags`
  const hosts = []

  fetch(uri)
    .then(response => {
      response.json().then(resp => {
        const team = resp.filter(item => {
          if (!item.tags.includes('team')) {
            hosts.push(item)
          }

          return item.tags.includes('team')
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
