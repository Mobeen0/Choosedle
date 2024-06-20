const express = require('express');
const cors = require('cors');

const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{console.log('it is what it is')})

// axios.get('https://wordsapiv1.p.mashape.com/words/example').then((response)=>{
//     console.log('sucessfully recieved data')
//     console.log(response);
// })


app.listen(5000,()=>{
    console.log('Server is listening')
});