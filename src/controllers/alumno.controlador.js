import Alumno from '../models/Alumno';


export const renderIndex = async (req,res)=>{
    const alumnos =  await Alumno.find().lean();
    res.render('index',{alumnos:alumnos});
};

//ALTA
export const insertarAlumno = async (req,res)=>{
    try {
        const alumno = Alumno(req.body);
        const alumnoadd = await alumno.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};

//BAJAS
export const deleteAlumno = async (req,res)=>{
    const {id} = req.params;
    await Alumno.findByIdAndDelete(id);
    res.redirect('/');
};

//CAMBIO
export const getEdit = async (req,res)=>{
    try {
        const alumno = await Alumno.findById(req.params.id).lean();
        res.render('edit', {alumno});
    } catch (error) {
        console.log(error.message);
    }
};
export const postEdit = async (req,res)=>{
    const {id} = req.params
    await Alumno.findByIdAndUpdate(id,req.body);
    res.redirect('/');
};