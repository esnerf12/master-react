import { useEffect, useState } from "react"

export function Fetch () {
    const [ users, setUsers ] = useState([])

    // Fetch

/*     const getUsers = () => {
        fetch("https://reqres.in/api/users?page=2")
            .then(res => res.json())
            .then(res => setUsers(res.data))
    } */

    // Fetch Async Await

    const getUsersAW = async () => {
        const res = await fetch("https://reqres.in/api/users?page=2")
        const {data} = await res.json()
        setUsers(data)
    }

    useEffect(() => {
        /* getUsers() */
        getUsersAW()
    }, [])

    return (
        <>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <img src={ user.avatar } alt="avatar" width="80" />
                            <li>
                                <strong>fullname:</strong> { user.first_name } { user.last_name } <br /> <strong>email:</strong> { user.email }
                            </li>
                        </div>
                    )
                })
            }
        </>
    )
}