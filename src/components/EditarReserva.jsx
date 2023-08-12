import { getDoc, updateDoc, doc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "../assets/config/firebase"
import { useNavigate } from "react-router-dom"


export const EditarReserva = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [fecha, setFecha] = useState('')
    const [nropersonas, setNropersonas] = useState(0)
  
    const {id} = useParams()


    const navigate = useNavigate()

    const ActualizarReserva = async (id) =>{
        const myReserv = await getDoc(doc(db, 'reservas',id))

        if (!myReserv.exists()){
            alert('No se encontro la reserva con el id:'+ id);
            return;
        }
        else{
            setNombre(myReserv.data().nombre)
            setApellido(myReserv.data().apellido)
            setCorreo(myReserv.data().correo)
            setFecha(myReserv.data().fecha)
            setNropersonas(myReserv.data().nropersonas)
        }
    }

    const onStore = async (event) => {
        event.preventDefault();
        const myReserv = doc(db, 'reservas', id)
        const data ={
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            fecha: fecha,
            nropersonas: nropersonas
        }

        await updateDoc(myReserv, data)
        alert("Registro actualizado exitosamente")
     
        navigate('/ListarReservas')
    
    }
  
    useEffect(() =>{
        ActualizarReserva(id)
    }, [])

  return (
    <div className="container">
      {/* Formulario */}
      <div className="row">
        <div className="col">
        <h2>Editar reserva: <span className="id-style">{id}</span></h2>
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
