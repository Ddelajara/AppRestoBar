import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, documentId, getDocs } from "firebase/firestore"
import { db } from "../assets/config/firebase"

export const ListarReservas = () => {

    const [reserva, setReserva] = useState([]);
    /* Invocar colección Reservas */
    const reservaCollectionRef = collection(db,'reservas');

    const getReservas = async () =>{
        const data = await getDocs(reservaCollectionRef)
        // console.log('data', data)
        setReserva(
            data.docs.map(doc => ({...doc.data(), id: doc.id}))
        )
        console.log(reserva)
    }

    useEffect(() =>{
        getReservas()
    }, [])

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-2">
                        <Link to='/CrearReserva' className='btn btn-success my-2 p-2'>
                            Crear Reserva
                        </Link>
                    </div>
                    <table className="table table-hover table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th>Nombre</th>
                                <th>apellido</th>
                                <th>Correo</th>
                                <th>Fecha Reserva</th>
                                <th>Nro. Personas</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { reserva.map(x => (
                                <tr key={x.id}>
                                    <td>{x.nombre}</td>
                                    <td>{x.apellido}</td>
                                    <td>{x.correo}</td>
                                    <td>{x.fecha}</td>
                                    <td>{x.nropersonas}</td>
                                    <td>
                                        <Link to={`/EditarReserva/${x.id}`} className="btn btn-warning">Editar</Link>
                                    </td>
                                    <td>    
                                        <button className='btn btn-danger'>Eliminar</button> 
                                        {/* Aquí corregí la clase del botón de 'btn btn.danger' a 'btn btn-danger' */}
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </>
  )
}
