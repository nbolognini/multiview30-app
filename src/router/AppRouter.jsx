import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { Navbar } from '../ui';
import { MultiviewRoutes } from "../multiview";

//import { Navbar } from "../ui/components/Navbar"

export const AppRouter = () => {
  return (
    <>

    
        <Routes>

            <Route path="login" element={<LoginPage/>} />
            <Route path="/*" element={ <MultiviewRoutes/> } />

        </Routes>
    
    </>
  )
}
