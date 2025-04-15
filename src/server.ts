import express from 'express';

const app= express();

const port = 3300;

app.get('/',(req,res)=>{
res.send('App is up and running');
});

app.listen(port,()=>{
    console.log('Sever is up and running');
})