const websock = require('ws').Server;
const WSS = new websock({port: 8081}); 

WSS.on('connection',(ws)=>{
    console.log('connected to websock nodejs');

    ws.on('message',(message)=>{
        console.log(message);
    });
});