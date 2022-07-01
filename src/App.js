import React, { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Inicio from "./components/Inicio"
import Perfil from "./components/Perfil"

/* Componente vista: Llamado App */
const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes>
    )
}

export default App


