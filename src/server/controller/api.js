import fetch from 'isomorphic-fetch';
import { stringify } from 'qs';

const apiKey = '22ee684177cc569aeb337a667ea71b9a';

const getUsersFront = (req, res) => {
  const fullResponse = {};
  const endPoints = [
    {
      name: 'speakers',
      url: `https://mediaparty2017.sched.com/api/role/export?api_key=${ apiKey }&role=speaker&format=json&strip_html=Y&featured=y&fields=name,about,url,avatar,username`,
    },
    {
      name: 'speakersSec',
      url: `https://mediaparty2017.sched.com/api/role/export?api_key=${ apiKey }&role=speaker&format=json&strip_html=Y&fields=name,about,url,avatar,username`,
    },
    {
      name: 'sponsors',
      url: `https://mediaparty2017.sched.com/api/role/export?api_key=${ apiKey }&role=sponsor&format=json&strip_html=Y&fields=level,name,avatar`,
    },
    {
      name: 'team',
      url: `https://mediaparty2017.sched.com/api/role/export?api_key=${ apiKey }&role=artist&format=json&strip_html=Y&fields=name,avatar,username`,
    },
    {
      name: 'executiveTeam',
      url: `https://mediaparty2017.sched.com/api/role/export?api_key=${ apiKey }&role=volunteer&format=json&strip_html=Y&fields=name,avatar,username`,
    },
  ];

  fetch(endPoints[0].url, {
    method: 'GET',
  })
  .then((resp) => resp.json())
  .then(data => {
    fullResponse.speakers = data;

    fetch(endPoints[1].url, {
      method: 'GET',
    })
    .then((resp) => resp.json())
    .then(data2 => {
      let matchSpeaker;
      const dataArr = [];

      data2.map(item => {
        matchSpeaker = false;
        fullResponse.speakers.map(itemFeatured => {
          if (itemFeatured.username === item.username) { matchSpeaker = true; }
          return itemFeatured;
        });

        if (matchSpeaker === false) { dataArr.push(item); }

        return item;
      });

      fullResponse.speakersSec = dataArr;

      fetch(endPoints[2].url, {
        method: 'GET',
      })
      .then((resp) => resp.json())
      .then(data3 => {
        fullResponse.partners = [];
        fullResponse.sponsors = [];
        fullResponse.collaborators = [];
        fullResponse.recruiters = [];

        data3.map(item => {
          const level = item.level && item.level.toLowerCase();

          switch (level) {
            case 'partners':
              fullResponse.partners.push(item);
              break;
            case 'sponsors':
              fullResponse.sponsors.push(item);
              break;
            case 'collaborators':
              fullResponse.collaborators.push(item);
              break;
            case 'recruiters':
              fullResponse.recruiters.push(item);
              break;
            default:
          }
        });

        fetch(endPoints[3].url, {
          method: 'GET',
        })
        .then((resp) => resp.json())
        .then(data4 => {
          fullResponse.team = data4;

          fetch(endPoints[4].url, {
            method: 'GET',
          })
          .then((resp) => resp.json())
          .then(data5 => {
            fullResponse.executiveTeam = data5;

            res.json(fullResponse);
          })
          .catch((err) => {
            console.info('Error: ', err);
            res.json(false);
          });
        })
        .catch((err) => {
          console.info('Error: ', err);
          res.json(false);
        });
      })
      .catch((err) => {
        console.info('Error: ', err);
        res.json(false);
      });
    })
    .catch((err) => {
      console.info('Error: ', err);
      res.json(false);
    });
  })
  .catch((err) => {
    console.info('Error: ', err);
    res.json(false);
  });
};

const addSession = (req, res) => {
  const randKey = Math.floor(Math.random() * 1000000) + 1;
  const D = req.body;
  let sessionData = {
    'session_start': '2018-08-22 10:00',
    'session_end': '2018-08-22 12:00',
    'api_key': apiKey,
    'session_key': randKey,
    'session_type': D.sessionType,
    'name': D.name ? D.name : '',
    'creator_name': D.username ? D.username : '',
    'creator_email': D.email ? D.email : '',
    'twitter': D.twitter ? D.twitter : '',
  };

  if (D.sessionType === 'workshop') {
    let suggestedProfile = '';

    if (D.suggestedProfile_Hackers_Software_Developers) {
      suggestedProfile = suggestedProfile ? `${ suggestedProfile }, Hackers & SoftwareDevelopers` : 'Hackers & SoftwareDevelopers';
    }
    if (D.suggestedProfile_Hacks_Journalists_Editors) {
      suggestedProfile = suggestedProfile ? `${ suggestedProfile }, Hacks & Journalists & Editors` : 'Hacks & Journalists & Editors';
    }
    if (D.suggestedProfile_Designers) {
      suggestedProfile = suggestedProfile ? `${ suggestedProfile }, Designers` : 'Designers';
    }
    if (D.suggestedProfile_Social_Data_Activists) {
      suggestedProfile = suggestedProfile ? `${ suggestedProfile }, Social Data Activists` : 'Social Data Activists';
    }
    if (D.suggestedProfile_Entrepreneurs) {
      suggestedProfile = suggestedProfile ? `${ suggestedProfile }, Entrepreneurs` : 'Entrepreneurs';
    }
    if (D.suggestedProfile_All_Of_Them) {
      suggestedProfile = suggestedProfile ? `${ suggestedProfile }, All of them` : 'All of them';
    }
    if (D.suggestedProfile_Other) {
      suggestedProfile = suggestedProfile ? `${ suggestedProfile }, ${ D.suggestedProfile_Other }` : D.suggestedProfile_Other;
    }

    sessionData = stringify(Object.assign(sessionData, {
      'description': D.description ? D.description : '',
      'expectedOutcome': D.expectedOutcome ? D.expectedOutcome : '',
      'Do_you_participate_in_any_community_linked_to_the_open_culture': D.questionA ? D.questionA : '',
      'Tell_us_which_is_the_community_that_you_are_involved': D.questionB ? D.questionB : '',
      'Have_you_been_in_the_Buenos_Aires_Media_Party_before': D.questionC ? D.questionC : '',
      'timeSuggested': D.timeSuggested ? D.timeSuggested : '',
      'suggestedProfile': suggestedProfile,
      'skillsAndBackground': D.skillsAndBackground ? D.skillsAndBackground : '',
      'skillsAndBackgroundLevel': D.skillsAndBackgroundLevel ? D.skillsAndBackgroundLevel : '',
      'requirements': D.requirements ? D.requirements : '',
    }));
  } else if (D.sessionType === 'lightning talk') {
    sessionData = stringify(Object.assign(sessionData, {
      'description': D.description ? D.description : '',
      'expectedOutcome': D.expectedOutcome ? D.expectedOutcome : '',
      'Do_you_participate_in_any_community_linked_to_the_open_culture': D.questionA ? D.questionA : '',
      'Tell_us_which_is_the_community_that_you_are_involved': D.questionB ? D.questionB : '',
      'Have_you_been_in_the_Buenos_Aires_Media_Party_before': D.questionC ? D.questionC : '',
      'relatedUrl': D.relatedUrl ? D.relatedUrl : '',
      'whereYouLive': D.whereYouLive ? D.whereYouLive : '',
      'checkInDay': D.checkIn ? D.checkIn : '',
      'checkOutDay': D.checkOut ? D.checkOut : '',
      'cityOfOrigin': D.cityOfOrigin ? D.cityOfOrigin : '',
    }));
  } else if (D.sessionType === 'media fair') {
    sessionData = stringify(Object.assign(sessionData, {
      'Have_you_been_to_Media_Party_before': D.questionD ? D.questionD : '',
      'MF_project_name': D.MF_project_name ? D.MF_project_name : '',
      'MF_description': D.MF_description ? D.MF_description : '',
      'MF_url': D.MF_url ? D.MF_url : '',
      'MF_logo': D.MF_logo ? D.MF_logo : '',
      'MF_terms_conditions': D.MF_terms_conditions ? D.MF_terms_conditions : '',
      'MF_exhibitor_name': D.MF_exhibitor_name ? D.MF_exhibitor_name : '',
      'MF_exhibitor_email': D.MF_exhibitor_email ? D.MF_exhibitor_email : '',
      'MF_exhibitor_twitter': D.MF_exhibitor_twitter ? D.MF_exhibitor_twitter : '',
      'MF_exhibitor_phone': D.MF_exhibitor_phone ? D.MF_exhibitor_phone : '',
      'whereYouLive': D.whereYouLive ? D.whereYouLive : '',
      'checkInDay': D.checkIn ? D.checkIn : '',
      'checkOutDay': D.checkOut ? D.checkOut : '',
      'cityOfOrigin': D.cityOfOrigin ? D.cityOfOrigin : '',
    }));
  } else if (D.sessionType === 'keynote') {
    sessionData = stringify(Object.assign(sessionData, {
      'description': D.description ? D.description : '',
      'Technical_needs': D.technicalNeeds ? D.technicalNeeds : '',
      'Preference': D.prefer ? D.prefer : '',
    }));
  } else {
    console.info('Error: no session type provided');
    res.json(false);
  }

  const userData = stringify({
    'api_key': apiKey,
    'full_name': D.username ? D.username : '',
    'company': D.company ? D.company : '',
    'about': D.about ? D.about : '',
    'position': D.position ? D.position : '',
    'email': D.email ? D.email : '',
    'phone': D.phone ? D.phone : '',
    'sessions': randKey.toString(),
  });

  fetch('https://mediaparty2017.sched.com/api/session/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(sessionData),
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
    },
    body: sessionData,
  })
  .then(() => {
    fetch('https://mediaparty2017.sched.com/api/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(userData),
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
      },
      body: userData,
    })
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      console.info('Error: ', err);
      res.json(false);
    });
  })
  .catch((err) => {
    console.info('Error: ', err);
    res.json(false);
  });
};

exports.addSession = addSession;
exports.getUsersFront = getUsersFront;