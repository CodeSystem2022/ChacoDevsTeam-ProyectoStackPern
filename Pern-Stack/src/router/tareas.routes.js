import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas} from "../controllers/tareas.controller.js"

router.get('/tareas', listarTareas );

router.get('/tareas/:id', listarTarea );

router.post('/tarea',crearTarea );

router.put('/tareas/:id', actualizarTarea );

router.delete('/tareas/:id', eliminarTarea );

export default router;