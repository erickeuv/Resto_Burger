import db from '../database/db.js'
//registro
export const register = ({ nombre, email, contraseña}) => 
    db('INSERT INTO users (id, nombre, email, contraseña) VALUES (DEFAULT, $1, $2, $3);', 
        [nombre, email, contraseña ]);
//login
export const login = ({ email}) => 
    db('SELECT * FROM users WHERE email =$1', [email]);
//buscar
export const findProfile = ({ email }) =>  
    db('SELECT * FROM users WHERE email = $1',[email]);
//eliminar
export const deleteProfile = (id) =>  
    db('DELETE FROM users WHERE id = $1 RETURNING *;',[id]);
//actualizar
export const updateProfile = (id, updateData) => { 
    const { nombre, email, contraseña } = updateData; 
    return db('UPDATE users SET nombre =$2, email=$3, contraseña=$4 WHERE id=$1 RETURNING *',
         [id, nombre, email, contraseña]);
};