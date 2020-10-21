const axios = require('axios');
const { response } = require('express');

let username =  'bayuajik2403';

axios.get('https://api.github.com/users/' + username).then((response)=>{
    console.log(response.data.avatar_url);
}).catch((err)=>{
    console.log(err);
});
