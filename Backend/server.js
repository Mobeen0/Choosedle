const express = require('express');
const cors = require('cors');

const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{console.log('it is what it is')})

axios.get('https://random-word-api.herokuapp.com/word', {
    params: {
      number: 1,
      length: 5
    }
  }).then((response)=>{
    console.log('sucessfully recieved data')
})



app.listen(5000,()=>{
    console.log('Server is listening')
});