const WS = new WebSocket('ws://localhost:8081');

document.forms[0].onsubmit=()=>{
    let input = document.getElementById('message');
    console.log(input.value);

    WS.send(input.value);
};