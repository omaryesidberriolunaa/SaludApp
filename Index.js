//vinculamos la variable app que contiene toda la configuracion de las rutas desde routes
var { app } = require("./bin/Rutas.js");
//montamos el servidor en el puerto 8080
app.listen(8080, ()=>{
    console.log('Conectado!')
})