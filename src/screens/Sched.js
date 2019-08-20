import React, { useEffect } from 'react'

const Sched = () => {
  let sched = ''

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://mediaparty2019.sched.com/js/embed.js'
    script.async = true
    sched.appendChild(script)
  })

  return (
    <>
      <a
        id="sched-embed"
        data-sched-sidebar="no"
        href="https://mediaparty2019.sched.com/"
      >
        View the Media Party 2019 schedule.
      </a>

      <div ref={ref => { sched = ref }} />
    </>
  )
}

export default Sched
