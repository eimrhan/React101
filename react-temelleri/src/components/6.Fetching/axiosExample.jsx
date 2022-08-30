import { useEffect, useState } from 'react';
import axios from 'axios'

function AxiosExample() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false))
    }, []) 

    return (
        <div>
            <h2>Axios</h2>

            <h4>Users</h4>
            {isLoading ? <div>Loading...</div> :
                users.map((user) => <li key={user.id}>{user.name}</li>)}
            <hr/>
        </div>
    )
}

export default AxiosExample;