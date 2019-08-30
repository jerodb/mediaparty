import { event } from 'react-ga'

const handleGAClick = (ev, action) => {
  const evObj = ev
  evObj.action = action || ev.action
  event(evObj)
}

const GAEvents = {
  header: [
    {
      category: 'Header nav',
      action: '',
    },
  ],
  hero: [
    {
      category: 'Register',
      action: 'Click on Register',
    },
    {
      category: 'Register for days',
      action: 'Click on DAY 2',
    },
    {
      category: 'Register for days',
      action: 'Click on DAY 3',
    },
    {
      category: 'Submit proposal',
      action: 'WORKSHOP',
    },
    {
      category: 'Submit proposal',
      action: 'LIGHTINING TALK',
    },
    {
      category: 'Submit proposal',
      action: 'MEDIA FAIR',
    },
    {
      category: 'Multimedia',
      action: 'Click on Media Party video'
    },
    {
      category: 'Streaming',
      action: 'Click on Media Party video'
    },
    {
      category: 'Submit proposal',
      action: 'INNOVATION AWARD',
    },
    {
      category: 'Workshops pre-registration',
      action: 'click here',
    },
  ],
  home: [
    {
      category: 'Link',
      action: 'Go to Agenda',
    },
    {
      category: 'Link',
      action: 'Vote for Mozilla Fest representative',
    },
    {
      category: 'Link',
      action: 'Take part of global net of misinformation',
    },
    {
      category: 'Link',
      action: 'Take part of the hackaton',
    }
  ],
  whereToStay: [
    {
      category: 'Where to stay',
      action: '',
    },
  ],
  partners: [
    {
      category: 'Partners, Guests and Sponsors',
      action: '',
    },
  ],
  formerEditions: [
    {
      category: 'Former editions',
      action: '',
    },
  ],
}

export { GAEvents }
export { handleGAClick }
