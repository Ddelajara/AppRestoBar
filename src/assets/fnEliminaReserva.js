import { deleteDoc, doc } from "firebase/firestore"
import { db } from "./config/firebase"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const EliminaReserva = async (id) =>{
    const reservaDoc = doc(db, 'reservas', id)

    await deleteDoc(reservaDoc)

}

export const MensajeConfirma = (id) =>{
    MySwal.fire({
        title: 'Estas seguro de eliminar?',
        text: "No podrás revertir el cambio!",
        icon: 'advertencia',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            EliminaReserva(id)
          Swal.fire(
            'Eliminado!',
            'Reserva ha sido eliminada.',
            'success'
          )
        }
      })
}