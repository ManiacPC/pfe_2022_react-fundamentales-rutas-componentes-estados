import React, { useState, useEffect} from "react"

// Componente
const Perfil = () => {
    // contadorLikes
    const [contadorLikes, setContadorLikes] = useState(0)

    /*
      * Cómo se lee un estado
      * console.log(contadorLikes)
      *
      * Cómo se cambia el valor de un estado
      * setContadorLikes(10)
     */
    const handleContador = (evento) => {
        setContadorLikes(contadorLikes + 1)
    }

    return (
        <>
            <h1>Perfil</h1>
            <button type="button" onClick={handleContador}>Dar like</button>

            <p>Conteo de likes: {contadorLikes}</p>
        </>
    )
}

export default Perfil