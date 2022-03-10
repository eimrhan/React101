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
            <h3>Users</h3>
            {isLoading ? <div>Loading...</div> :
                users.map((user) => <div key={user.id}>{user.name}</div>)}
        </div>
    )
}

export default AxiosExample;