import React from 'react'

const Input = ({infoUsuario, placeholder, onChange, value}) => {
  return (
    <div className='contenedor-input'>
    {/*creacion de input (ingrese usuario y contraseña) */ }
      <input placeholder= {placeholder}
        onChange={onChange}
        value={value}
      />
      {infoUsuario}
      
      
    </div>
  )
}

export default Input
