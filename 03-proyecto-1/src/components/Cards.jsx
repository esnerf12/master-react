import { useEffect, useState } from "react"

export function Cards () {
    const [ movies, setMovies ] = useState([])

    useEffect(() => {
        getDataFromLocalStorage()
    }, [])

    const getDataFromLocalStorage = () => {
        const data = JSON.parse(localStorage.getItem('movies'))
    
        setMovies(data)
    }

    return (
        <>
            {
                movies 
                    ? movies.map(movie => {
                    return (
                        <article key={movie.id} className="peli-item">
                            <h3 className="title">{ movie.title }</h3>
                            <p className="description">{ movie.description }</p>
            
                            <button className="edit">Editar</button>
                            <button className="delete">Eliminar</button>
                        </article>
                    )
                })
                : <h3>No se encontraron peliculas</h3>
            }
        </>
    )
}
