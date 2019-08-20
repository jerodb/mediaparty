const apiKey = process.env.API_KEY
const schedUrl = process.env.SCHED_URL

export default async (req, res) => {
  const apiEndpoint = `${schedUrl}/api/role/export?api_key=${apiKey}`

  const uri = `${apiEndpoint}&role=speaker&format=json&strip_html=Y&featured=y&fields=name,about,url,avatar,username`

  fetch(uri)
    .then(response => {
      response.json().then(resp => res.json(resp))
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Error featured speakers: ', err)
      return res.json(false)
    })
}
