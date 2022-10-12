const bcrypt = require('bcrypt')


//* encripta la contraseña deñ usuario cuando se crea o modifica la contraseña
const hashPassword = (plainPassword)=>{
    return bcrypt.hashSync(plainPassword, 10)

}

// console.log(hashPassword('root'))


//* comparar si la contraseña root es a = $2b$10$UfZ6c1Xwg1AJSZrH42iilOnhWTgkXkSO0ey2yZb1GV9SUBWL7B59G
const comparePassword = (plainPassword,hashPassword)=>{
    //* plainPassword: contraseña que recibimos de login
    //* hashPassword: contraseña que tenemos guardada en la base de datos

    //! esta utilidad se usa cuando hacemos un login y recibimos la contraseña del usuario 
    //! y la comparamos con la que tenemos en la DB
      return bcrypt.compareSync(plainPassword,hashPassword)
}


// console.log(comparePassword('root', '$2b$10$UfZ6c1Xwg1AJSZrH42iilOnhWTgkXkSO0ey2yZb1GV9SUBWL7B59G'))

module.exports = {
    hashPassword,
    comparePassword
}
