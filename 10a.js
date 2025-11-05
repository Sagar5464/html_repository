const http = require('http');
const server =http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('hellp World\n');
});
server.listen(5000,()=>{
    console.log('Server running at http://localhost:5000/');
});