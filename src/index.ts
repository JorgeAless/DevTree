import server from './server';

// Configurando el puerto con variable de entorno
const port = process.env.PORT || 4000;

// Iniciando el servidor...
server.listen(port, () => {
  console.log("Servidor funcionando en el puerto: ", port);
});

