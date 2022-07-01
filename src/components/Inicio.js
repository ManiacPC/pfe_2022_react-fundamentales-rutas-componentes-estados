import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// Componente
const Inicio = () => {

    return (
        <>
            <h1>Inicio</h1>
            <div>
                <Link to="/perfil">Ir al perfil</Link>
            </div>
        </>

    )
}

export default Inicio