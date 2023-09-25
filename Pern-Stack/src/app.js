import express from 'express';
import tareasRoutes from "./router/tareas.routes.js"

const app = express();
//Middlewares
app.use(morgan("dev"));

app.get('/',(req,res) => res.json({message: 'Bienvenidos a mi primer proyecto'}));
app.use("/tareas", tareasRoutes);

//Manejando errores
app.use((err,req,res,next) => {
    res.status(500).json({
        status:'error',
        message:'err .message'
    });
});

export default app;