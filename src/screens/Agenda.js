import React, { useEffect, useState } from 'react'

const Agenda = () => {
  let sched = ''

  const [linkTxt, setLinkTxt] = useState('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://mediaparty2019.sched.com/js/embed.js'
    script.async = true
    sched.appendChild(script)
    // setLinkTxt('View the Media Party 2019 schedule.')
  })

  return (
    <>
      <a
        id="sched-embed"
        data-sched-sidebar="no"
        href="https://mediaparty2019.sched.com/"
      >
        {linkTxt}
      </a>

      <div ref={ref => { sched = ref }} />
    </>
  )
}

export default Agenda
