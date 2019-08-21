const getSchedData = () => new Promise(resolve => fetch('/api/get/sched-data/', {
  method: 'GET',
})
  .then(res => {
    res.json().then(data => {
      resolve(data)
    })
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log('Fetch error: ', err)
    resolve({})
  }))

export default getSchedData
