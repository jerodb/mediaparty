# Mediaparty  
  
The Media Party is a 3 days event in Buenos Aires, Argentina, that gathers more than 2500 entrepreneurs, journalists, developers and designers from five continents to work together for the future of media.  
  
&nbsp;
## Getting started
- Create .env file with the following variables:

```
  API_KEY=
  BASE_NAME=
  DEFAULT_LANG=
  GA_TRACKING_ID=
  HOST=
  MP_KEY=
  MP_SECRET=
  NODE_ENV=
  PORT=
  SCHED_URL=
```
  
For example:
  
```
  API_KEY=YOUR_SCHED_API_KEY
  BASE_NAME=/
  DEFAULT_LANG=en
  GA_TRACKING_ID=UA-42580123-1
  HOST=http://localhost:4000/
  MP_KEY=YOUR_LIVE_STREAMING_KEY
  MP_SECRET=DCBhUSDVjNBl4o87gD0kldloHKkdsap3f
  NODE_ENV=development
  PORT=4000
  SCHED_URL=https://mediaparty2019.sched.com
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
  
Para persistir el servidor usamos pm2.  

- Si es la primera vez que se inicia la aplicación:  
```
$ pm2 start yarn --name "mediaParty" -- start
```
  
- Iniciar, detener y reiniciar:  
```
$ pm2 start mediaParty
$ pm2 stop mediaParty
$ pm2 restart mediaParty
```
  
- Listar servidores:  
```
$ pm2 l
```
  
- Para actualizar cambios en el servidor:
```  
1. $ git pull
2. $ yarn build
3. $ pm2 restart mediaParty
```    
  
&nbsp;
## Live streaming  
  
*(\*) El password que se usa para configurar el live streaming se define en el archivo .env*  

1. Ir a http://mediaparty.info/liveid/VIDEO_ID para setear el ID del video en youtube (https://www.youtube.com/embed/VIDEO_ID).
2. Para activar el live streaming en el sitio: ir a http://mediaparty.info/liveon
3. Para desactivar el live streaming en el sitio: ir a http://mediaparty.info/liveoff  
  