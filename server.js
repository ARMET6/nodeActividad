//Importar el módulo HTTP
const http = requere('http');

//Definir el puerto en que se ejecitara el servidor
const PORT = 300;

//Crear el servidor 

const servidor = http.createServer ((req, res) => {
    res.WriteHead(200, { 'ContentType' : 'text/plain'});

    res.end('Hola mundo desde Node.js.');
} );

servidor.listen(PORT, () =>{
    console.log('El servidor está corriendo en el puerto ${PORT}');
})

