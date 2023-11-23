import { useState } from "react"
import { getDataFromLocalStorage } from "../helpers/utils.js"

export function Cards () {
    const [ movies ] = useState(getDataFromLocalStorage)

    return (
        <>
            {
                movies.map(movie => {
                    return (
                        <article key={movie.id} className="peli-item">
                            <h3 className="title">{ movie.title }</h3>
                            <p className="description">{ movie.description }</p>
            
                            <button className="edit">Editar</button>
                            <button className="delete">Eliminar</button>
                        </article>
                    )
                })
            }
        </>
    )
}
