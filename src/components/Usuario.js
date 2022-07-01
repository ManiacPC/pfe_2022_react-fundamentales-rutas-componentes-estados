import React, { useState, useEffect } from "react"

const Usuario = () => {
    const [nombreUsuario, setNombreUsuario] = useState("")
    const [terminosContrato, setTerminosContrato] = useState(false)

    const handleUsuario = (evento) => {
        // ¿dónde está en el evento lo que viene escrito
        // por el usuario desde el input de texto?
        // R: evento.target.value
        setNombreUsuario(evento.target.value)
    }

    const handleTerminos = (evento) => {
        setTerminosContrato(!terminosContrato)
    }

    return (
        <>
            <h1>Usuario</h1>
            <label htmlFor="usuario">Indique un nombre de usuario</label> <br />
            <input type="text"
                   name="usuario"
                   placeholder="P.ej.: Pepa"
                   onChange={handleUsuario}
            /><br /><br />
            {nombreUsuario === "billgates" &&
                <p>YA EXISTE ESE USUARIO</p>
            }
            <br />

            <input type="checkbox"
                   checked={terminosContrato}
                   onChange={handleTerminos}
                   name="terminos"
            />
            <label htmlFor="terminos">Acepto los términos de contrato</label><br /><br />

            <button type="button">Guardar nombre de usuario</button>
        </>
    )
}

export default Usuario
