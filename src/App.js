import React, { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Inicio from "./components/Inicio"
import Perfil from "./components/Perfil"
import Usuario from "./components/Usuario"

/* Componente vista: Llamado App */
const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/usuario" element={<Usuario />} />
        </Routes>
    )
}

export default App


