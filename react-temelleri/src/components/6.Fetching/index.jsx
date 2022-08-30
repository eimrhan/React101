import { useEffect, useState } from 'react';

function Fetching() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false))
    }, [])  // komponent mount olduğunda çalışır.

    return (
        <div>
            <h2>Fetching</h2>

            <h4>Users</h4>
            {isLoading ? <span>Loading...</span> :
                users.map((user) => <li key={user.id}>{user.name}</li>)}
            <hr/>
        </div>
    )
}

export default Fetching;
