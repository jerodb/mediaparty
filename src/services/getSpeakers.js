const getSpeakers = () => new Promise(resolve => fetch('/api/get/speakers/', {
  method: 'GET',
})
  .then(res => {
    res.json().then(speakers => {
      resolve(speakers)
    })
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log('Fetch error: ', err)
    resolve([])
  }))

export default getSpeakers
