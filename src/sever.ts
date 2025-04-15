import expres from 'express';

const app= expres();

const port = 3300;

app.get('/',(req,res)=>{
res.send('App is up and running');
});

app.listen(port,()=>{
    console.log('Sever is up and running');
})