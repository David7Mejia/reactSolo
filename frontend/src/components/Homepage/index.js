import './Homepage.css';
import '../Navigation/Navigation.css';
import { useSelector } from "react-redux";
import Posts from '../Posts';
import LandingModal from '../LandingModal';


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
                <div className='slideshow-container'>

            <LandingModal />
  <div class="slide-container img1">
  </div>

  <div class="slide-container img2">

  </div>

  <div class="slide-container img3">
  </div>

  <div class="slide-container img4">
  </div>


            </div>
        )
    };

}

export default Homepage
