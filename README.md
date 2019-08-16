# Mediaparty  
  
The Media Party is a 3 days event in Buenos Aires, Argentina, that gathers more than 2500 entrepreneurs, journalists, developers and designers from five continents to work together for the future of media.  
  
&nbsp;
## Getting started
- Create .env file with the following variables:

```
  NODE_ENV=
  HOST=
  PORT=
  SSL_PORT=
  SSL_CERT=
  DEFAULT_LANG=
  API_KEY=
  SCHED_URL=
  MP_KEY=
  MP_SECRET=
  GA_TRACKING_ID=
```
  
For example:
  
```
  NODE_ENV=production
  HOST=https://mediaparty.info/
  PORT=8080
  SSL_PORT=443
  SSL_CERT=/path/to/certs/dir/
  DEFAULT_LANG=en
  API_KEY=YOUR_SCHED_API_KEY
  SCHED_URL=https://mediaparty2019.sched.com
  MP_KEY=YOUR_KEY_FOR_LIVE_STREAMING
  MP_SECRET=YOUR_SECRET_FOR_LIVE_STREAMING
  GA_TRACKING_ID=UA-42580986-1
```
  
&nbsp;
## Install, build and run  
  
*(\*) Node environment and Webpack mode depends on NODE_ENV value set in .env file.*  
  
- Install dependencies  
```
$ yarn
```
  
- Bundle app using webpack and start node server:  
```
$ yarn build
$ yarn start
```

- Start **[dev-server](https://webpack.js.org/configuration/dev-server)** with **[HMR](https://webpack.js.org/concepts/hot-module-replacement/)**:  
```
$ yarn dev
``` 
  
&nbsp;
## Production server  
  
We use **[pm2](https://www.npmjs.com/package/pm2)** to persist the server.  

- The first time you start the app run:  
```
$ pm2 start yarn --name "mediaParty" -- start
```
  
- Start, stop and restart:  
```
$ pm2 start mediaParty
$ pm2 stop mediaParty
$ pm2 restart mediaParty
```
  
- List active server:  
```
$ pm2 l
```
  
- Update changes:
```  
1. $ git pull
2. $ yarn build
3. $ pm2 restart mediaParty
```    
  
&nbsp;
## Live streaming  

1. Go to **https://mediaparty.info/liveid/<VIDEO_ID>** to set the youtube video that will be played on the landing page. (ex: https://mediaparty.info/liveid/**veas_6NvJMk**).
2. Turn on live streaming: go to **https://mediaparty.info/liveon**
3. Turn off live streaming: got to **https://mediaparty.info/liveoff**  
    
*(\*) The key/password used for live streaming management should be set in the .env file.*    
*(\*\*) The **VIDEO_ID** can be obtained from the youtube video uri. ex: https://www.youtube.com/watch?v=**veas_6NvJMk**.*  
  