const websock = require('ws').Server;
const WSS = new websock({port: 8081}); 

WSS.on('connection',(ws)=>{
    console.log('connected to websock nodejs');

    ws.on('message',(message)=>{
        if(message === 'close'){
                ws.close();
        } else{

            WSS.clients.forEach((client)=>{
                client.send(message);
            });
            console.log(message);
        }
    });
});