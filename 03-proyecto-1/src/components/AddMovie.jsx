import { useState } from "react"
import { saveInStorage } from "../helpers/utils.js"

// eslint-disable-next-line react/prop-types
export function AddMovie ({ setMoviesState }) {

    const [ movies, setMovies ] = useState({})

    const getDataForm = (e) => {
        e.preventDefault()
        const data = {
            id: new Date().getTime(),
            title: e.target.title.value,
            description: e.target.description.value
        }

        setMovies(data)
        
        setMoviesState(elements => {
            return [...elements, data]
        })

        saveInStorage(data)
    }

    return (
        <>
            {
                movies.title && movies.description ? 'Has creado la pelicula con exito: ' + movies.title : '' 
            }
            <div className="add">
                <h3 className="title">Anadir peliculas</h3>
                <form onSubmit={ getDataForm }>
                    <input type="text" name="title" placeholder="Titulo" />
                    <textarea name="description" cols="30" rows="10" placeholder="Descripcion"></textarea>
                    <input type="submit" value="Guardar" />
                </form>
            </div>
        </>
    )
}
