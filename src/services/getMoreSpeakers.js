const getMoreSpeakers = feauteredSpeakers => new Promise(resolve => fetch('/api/get/more-speakers/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ feauteredSpeakers })
})
  .then(res => {
    res.json().then(data => {
      resolve(data)
    })
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log('Fetch error: ', err)
    resolve([])
  }))

export default getMoreSpeakers
