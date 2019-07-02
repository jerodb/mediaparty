# Mediaparty #

**Install dependencies**
$ yarn

**Build**
$ yarn build

**Production server**
Para persistir el servidor usamos pm2:
Iniciar servidor: **$ pm2 start mediaParty**
Para servidor: **$ pm2 stop mediaParty**
Reiniciar servidor: **$ pm2 restart mediaParty**
Listar servidores: **$ pm2 l**

Si es la primera vez que se inicia la aplicación con pm2:
$ pm2 start yarn --name "mediaParty" -- start

**Start dev localhost**
$ yarn start

**Como subir cambios:**
Traer los cambios desde el repo: **$ git pull**
Buildear app: **$ yarn build**
Reiniciar servidor: **$ pm2 restart mediaParty**


##LIVE STREAMING##
- Para que funcione el Live Streaming hay que crear en el directorio raiz los archivos liveStreaming y videoId con permisos de lectura y escritura.

1. Ir a http://mediaparty.info/liveid/VIDEO_ID para setear el ID del video en youtube (https://www.youtube.com/embed/VIDEO_ID).
2. Para activar el live streaming en el sitio: ir a http://mediaparty.info/liveon
3. Para desactivar el live streaming en el sitio: ir a http://mediaparty.info/liveoff

(*) 2 y 3 sólo se pueden hacer desde el mismo browser donde previamente se hizo 1.
(**) El password que se usa en 1 se define en el archivo .env


##IMPORTANT##  
- En el servidor de producción crear un archivo .env con los parametros de .env.example  
