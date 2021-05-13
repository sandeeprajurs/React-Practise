import {useParams} from 'react-router';

function User(){
        const {firstName, lastName} = useParams();
        return <h1>User Page: {firstName} {lastName}</h1>
}

export default User;