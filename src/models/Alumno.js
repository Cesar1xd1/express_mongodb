import {Schema,model} from 'mongoose';

const alumnoSch = new Schema({
    num_control:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true,
    } 
});

export default model('Alumno',alumnoSch);

