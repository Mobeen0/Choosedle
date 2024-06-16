const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('./', (req,res)=>{console.log('it is what it is')})


app.listen(5000,()=>{
    console.log('Server is listening')
});