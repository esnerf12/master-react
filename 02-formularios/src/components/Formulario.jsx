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
            biografia:  data.biografia.value,
            enviar: data.enviar.value
        }
        setUser(usuario)
    }

    const updateData = (e) => {
        let name_input = e.target.name

        setUser(estado_previo => ({
            ...estado_previo,
            [name_input] : e.target.value
        }))
    }

    return (
        <>
            <h1>Formulario con React</h1>

            { user.enviar &&
                (
                    <div className="user_info">
                        { user.nombre } { user.apellido } { user.genero } { user.biografia }
                    </div>
                )
            }

            <form onSubmit={getDataForm}>
                <input onChange={updateData} type="text" name="nombre" placeholder="Nombre" />
                <input onChange={updateData} type="text" name="apellido" placeholder="Apellido" />
                <select onChange={updateData} name="genero">
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea onChange={updateData} name="biografia" cols="30" rows="10" placeholder="Biografia"></textarea>
                <input type="submit" value="Enviar" name="enviar"/>
            </form>
        </>
    )
}