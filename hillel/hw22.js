const http = require('http');
const url = require('url');


    
    

http.createServer((req, res)=>{ 
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-hEADERS', 'content-type');

    // const q = url.parse(req.url, true)
    // if(req.url == '/') res.end(JSON.stringify({ name: 'Sergey'}));
    // if(req.url == '/getName') {
    //     res.end(JSON.stringify({ name: 'Sergey'}));}

    const method = ['POST', 'OPTIONS']
    if(method.includes(req.method) && req.url === '/user'){
        let body = [];
        req
        .on('data', (chunk)=>{
            body.push(chunk);
        })
        .on('end', ()=>{
            body = String(body);
            console.log(body);
            if(body){
                const r = JSON.parse(body);
                r.teacher = 'sergey';
                res.end(JSON.stringify({r}))
            }
            res.end(JSON.stringify({}))
        })
    }



}).listen(8090, ()=> console.log('server is create'));

// fetch('http://localhost:8090/user', {method:'POST', body: JSON.stringify({ school: 'Hillel', course: 'javascript pro'}))}).then(d=>d.json()).then(r => console.log(r))