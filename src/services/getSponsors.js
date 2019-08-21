const getSponsors = () => new Promise(resolve => fetch('/api/get/sponsors/', {
  method: 'GET',
})
  .then(res => {
    res.json().then(sponsors => {
      resolve(sponsors)
    })
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log('Fetch error: ', err)
    resolve([])
  }))

export default getSponsors
