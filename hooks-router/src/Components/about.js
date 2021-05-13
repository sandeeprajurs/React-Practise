import { useLocation, useHistory } from 'react-router';

function About() {
        const location = useLocation();
        const history = useHistory();

        function goBackHandler(){
                history.goBack();
        }

        return (
                <div>
                        <h1>About Page</h1>
                        <div>Location: <span>{location.pathname}</span></div>
                        <div>From: <span>{location.state.from}</span></div>
                        <button onClick={goBackHandler}>Go Back</button>
                </div>
        )
}

export default About;