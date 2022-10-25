import Input from "./components/Input";
import { useState } from "react";
import Boton from "./components/Boton";


function App() {

  const [nombre, setNombre]= useState('');
  const [contraseña,setContraseña] = useState('');
  
//Estado para los errores
  const [error, setError] = useState(false);

//funcion para visualizar boton con la contraseña
//guardar informacion del inputContraseña con setContraseña(e.target.value)
const inputContraseña= e=>{
  setContraseña(e.target.value);
}

//Función antes de enviar el formulario
  const agregarInformacion = e=>{
    e.preventDefault()
    console.log(nombre,contraseña)

//Validación;
if (nombre === '' ||  contraseña === '')
{
setError(true);
return;
}

  }
  return (
    <div className="container">
    
    <form className="form-content" onSubmit={agregarInformacion}>
    <h1>Login</h1>
    {error ? <p>Todos los campos son obligatorios</p> : null}
    <label><strong>Nombre de Usuario</strong></label>
      <Input onChange={(e)=>setNombre(e.target.value)}  placeholder={'Ingresa Nombre de Usuario'}/>


      {/* <Input placeholder={'Ingresa correo electronico'}/> */}
      <label><strong>Contraseña</strong></label>
      <Input onChange={inputContraseña}  placeholder={'Ingresa contraseña'}/>
      
      {nombre !=='' && contraseña === '252525' ? <Boton type={'submit'}/>: null
      }
     
    </form>
    </div>
    
  );
  
}

export default App;
