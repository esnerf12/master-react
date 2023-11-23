export const saveInStorage = (movie) => {
    let items = JSON.parse(localStorage.getItem('movies'))

    if (Array.isArray(items)) {
        items.push(movie)
    } else {
        items = [movie]
    }

    localStorage.setItem("movies", JSON.stringify(items))

    return movie
}

export const getDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('movies'))

    return data
}
