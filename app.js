const http = require('http');

const PORT = 3000;

function requireListener(request, response){
    console.log(`Server is running on ${PORT}`);
}

const server = http.createServer(requireListener);




server.listen(PORT);