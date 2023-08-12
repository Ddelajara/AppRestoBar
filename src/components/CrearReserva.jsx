import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../assets/config/firebase"
import { useNavigate } from "react-router-dom"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export const CrearReserva = () => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [correo, setCorreo] = useState('')
  const [fecha, setFecha] = useState('')
  const [nropersonas, setNropersonas] = useState(0)

  const navigate = useNavigate()

  const userCollectionRef = collection(db, 'reservas')

  const onStore = async () =>{
    event.preventDefault();

    /* Función addDoc (asincrona) propia de Firebase para registrar en BD */
    /* el ID del nuevo registro nuevo se crea automáticamente */
     await addDoc(userCollectionRef, {nombre: nombre, apellido: apellido, correo: correo, fecha: fecha, nropersonas: nropersonas})

     MySwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
     
     navigate('/ListarReservas')
  }

  return (
    <div className="container">
      {/* Formulario */}
      <div className="row">
        <div className="col">
            <h2>Crear una nueva reserva</h2>
            <form onSubmit={onStore}>
                <div className="mb-3">
                  <label className="form-label">Nombre:</label><br/>
                  <input  type="text" 
                          className="form-control" 
                          value={(nombre)}
                          onChange={(e)=>setNombre((e.target).value)}
                          />
                 </div>

                 <div className="mb-3">
                  <label className="form-label">Apellido:</label><br/>
                  <input  type="text" 
                          className="form-control" 
                          value={(apellido)}
                          onChange={(e)=>setApellido((e.target).value)}
                          />
                 </div>

                 <div className="mb-3">
                  <label className="form-label">Correo:</label><br/>
                  <input  type="text" 
                          className="form-control" 
                          value={(correo)}
                          onChange={(e)=>setCorreo((e.target).value)}
                          />
                 </div>

                 <div className="mb-3">
                  <label className="form-label">Fecha:</label><br/>
                  <input  type="date" 
                          className="form-control" 
                          value={(fecha)}
                          onChange={(e)=>setFecha((e.target).value)}
                          />
                 </div>


                 <div className="mb-3">
                  <label className="form-label">Nro. Personas:</label><br/>
                  <input  type="number" 
                          className="form-control" 
                          value={(nropersonas)}
                          onChange={(e)=>setNropersonas((e.target).value)}
                          />
                 </div>

                 <button type="submit" className="btn btn-success">Grabar reserva</button>

            </form>
        </div>
      </div>
    </div>
  )
}
