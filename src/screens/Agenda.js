import React, { useEffect } from 'react'
import ReactGA from 'react-ga'

const Agenda = () => {
  let sched = ''

  useEffect(() => {
    const element = document.getElementById('sched-iframe')

    if (element) element.classList.remove('hide')
    else {
      const script = document.createElement('script')
      script.src = 'https://mediaparty2019.sched.com/js/embed.js'
      script.async = true
      sched.appendChild(script)
    }

    ReactGA.pageview(`${window.location.pathname}${window.location.search}`)

    return () => {
      const el = document.getElementById('sched-iframe')

      if (el) el.classList.add('hide')
    }
  }, [])

  return (
    <>
      { /* eslint-disable-next-line jsx-a11y/anchor-has-content */ }
      <a
        id="sched-embed"
        data-sched-sidebar="no"
        href="https://mediaparty2019.sched.com/"
      />
      <div ref={ref => { sched = ref }} />
    </>
  )
}

export default Agenda
