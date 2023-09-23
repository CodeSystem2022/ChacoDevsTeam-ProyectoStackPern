import express from 'express';

const app = express();

app.use(morgan("dev"));

app.get('/',(req,res) => res.json({message: 'Bienvenidos a mi primer proyecto'}));


app.use((err,req,res,next) => {
    res.status(500).json({
        status:'error',
        message:'err .message'
    });
});

export default app;