import { useEffect, useState } from 'react';
// import AxiosExample from './5.2.axios';

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
            <h4>Users</h4>
            {isLoading ? <div>Loading...</div> :
                users.map((user) => <div key={user.id}>{user.name}</div>)}

            {/* Axios örneği */}
            {/* <AxiosExample /> */}
        </div>
    )
}

export default Fetching;
