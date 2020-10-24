const WS = new WebSocket('ws://localhost:8081');

WS.onmessage = (payload)=>{
    console.log(payload.data);
    displayMessages(payload.data);

};

WS.onopen = ()=>{
    displayTitle('Connected to Server');

};

function displayTitle(title){
    document.querySelector('h1').innerHTML = title;
}

function displayMessages(message){
    let h1 = document.createElement('h1');
    h1.innerText = message;
    document.querySelector('div.messages').appendChild(h1);
}

WS.onclose = ()=>{
    console.log('connection close');
};
document.forms[0].onsubmit=()=>{
    let input = document.getElementById('message');
    console.log(input.value);

    WS.send(input.value);
};