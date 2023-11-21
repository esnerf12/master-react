import { useState } from "react"

export function Formulario () {
    const [ user, setUser ] = useState({})

    const getDataForm = (e) => {
        e.preventDefault()
        let data = e.target
        let usuario = {
            nombre: data.nombre.value,
            apellido: data.apellido.value,
            genero: data.genero.value,
            biografia:  data.biografia.value
        }
        setUser(usuario)
    }

    return (
        <>
            <h1>Formulario con React</h1>

            <div className="user_info">
                { user.nombre } { user.apellido } { user.genero } { user.biografia }
            </div>

            <form onSubmit={getDataForm}>
                <input type="text" name="nombre" placeholder="Nombre" />
                <input type="text" name="apellido" placeholder="Apellido" />
                <select name="genero">
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name="biografia" cols="30" rows="10" placeholder="Biografia"></textarea>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}