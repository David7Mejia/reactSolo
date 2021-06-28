import './Homepage.css';
import '../Navigation/Navigation.css';
import { useSelector } from "react-redux";
import Posts from '../Posts';


function Homepage() {
    const loggedIn = useSelector(state => state.session).user;
    if (loggedIn) {
        return (
                <div className='home-form'>

                <Posts/>

                </div>
        )
    } else {
        return (
            <div className='img1'>
                <div>
                </div>
            </div>
        )
    };

}

export default Homepage
