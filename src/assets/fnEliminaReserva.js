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
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            EliminaReserva(id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}