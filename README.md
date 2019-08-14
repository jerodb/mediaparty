# Mediaparty  
  
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
  
- Install dependencies  
```
$ yarn
```
  
- Build  
```
$ yarn build
```  
  
- Start dev localhost  
```
$ yarn start
```  
  
&nbsp;
## Production server  
  
- Para persistir el servidor usamos pm2:  
Iniciar servidor: **$ pm2 start mediaParty**  
Parar servidor: **$ pm2 stop mediaParty**  
Reiniciar servidor: **$ pm2 restart mediaParty**  
Listar servidores: **$ pm2 l**  
  
- Si es la primera vez que se inicia la aplicación con pm2:  
**$ pm2 start yarn --name "mediaParty" -- start**  
  
**Como subir cambios:**  
1. Traer los cambios desde el repo: **$ git pull**  
2. Buildear app: **$ yarn build**  
3. Reiniciar servidor: **$ pm2 restart mediaParty**  
  
&nbsp;
## Live streaming  
  
1. Ir a http://mediaparty.info/liveid/VIDEO_ID para setear el ID del video en youtube (https://www.youtube.com/embed/VIDEO_ID).
2. Para activar el live streaming en el sitio: ir a http://mediaparty.info/liveon
3. Para desactivar el live streaming en el sitio: ir a http://mediaparty.info/liveoff

(*) El password que se usa para esto se define en el archivo .env  
  