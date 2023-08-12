import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { About } from "../components/About"
import { MenuNav } from "../components/MenuNav"
import { NotFound } from "../components/NotFound"
import { ListarReservas } from "../components/ListarReservas"
import { CrearReserva } from "../components/CrearReserva"
import { EditarReserva } from "../components/EditarReserva"

export const AppRouter = () => {
  return (
    <>
       <MenuNav/>
        <Routes>
            {/* <Route path='/' element={<home />}/> */}
            <Route path='/' element={<Home />}/>
            <Route path='About' element={<About />}/>
            <Route path='ListarReservas' element={<ListarReservas />}/>
            <Route path='CrearReserva' element={<CrearReserva />}/>
            <Route path='EditarReserva/:id' element={<EditarReserva />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    </>
  )
}
