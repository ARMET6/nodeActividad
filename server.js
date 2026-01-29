// Importar el modulo HTTP
const http = require('http');

//Definir el puerto en que se ejecutara el servidor
const PORT = 3000;

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola Mundo desde Node.js ');
});

servidor.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});