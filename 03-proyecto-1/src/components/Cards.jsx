import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
export function Cards ({ movies, setMovies }) {

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
                    // eslint-disable-next-line react/prop-types
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
