const getTeam = () => new Promise(resolve => fetch('/api/get/team/', {
  method: 'GET',
})
  .then(res => {
    res.json().then(team => {
      resolve(team)
    })
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log('Fetch error: ', err)
    resolve({})
  }))

export default getTeam
