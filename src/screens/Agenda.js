import React, { useEffect } from 'react'

const Agenda = () => {
  let sched = ''

  useEffect(() => {
    const element = document.getElementById('sched-iframe')

    console.log('element: ', element)

    if (element) element.classList.remove('hide')
    else {
      const script = document.createElement('script')
      script.src = 'https://mediaparty2019.sched.com/js/embed.js'
      script.async = true
      sched.appendChild(script)
    }

    return () => {
      const el = document.getElementById('sched-iframe')
      console.log('el: ', el)

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
