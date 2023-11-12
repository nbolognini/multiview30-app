import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../../multiview/pages/HomePage"
import { Canal26Page } from "../../multiview/pages/Canal26Page"
import { LoginPage } from "../../auth/pages/LoginPage"

import { Navbar } from '../../ui';

//import { Navbar } from "../ui/components/Navbar"

export const MultiviewRoutes = () => {
  return (
    <>
        <Navbar />
          <div className="container">
            <Routes>
                <Route path="home" element={<HomePage/>} />
                <Route path="canal26" element={<Canal26Page/>} />
                <Route path="login" element={<LoginPage/>} />
                <Route path="/" element={<Navigate to="/home" />} />
              </Routes>
          </div>
    </>
  )
}
