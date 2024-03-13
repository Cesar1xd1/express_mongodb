import {Router} from 'express';
import { deleteAlumno, getEdit, insertarAlumno, postEdit, renderIndex } from '../controllers/alumno.controlador';

const router = Router();
//Index
router.get('/',renderIndex );

//ALTAS
router.get('/altas',(req,res)=>{
    res.render('altas');
});
router.post('/alumnos/add',insertarAlumno);

//BAJAS
router.get('/alumnos/:id/delete', deleteAlumno);

//CAMBIOS
router.get('/alumnos/:id/edit', getEdit);
router.post('/alumnos/:id/edit' ,postEdit);

//Export
export default router;