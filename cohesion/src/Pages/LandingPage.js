import Home from "./Home";
import About from './About';
import ContactUs from './ContectUs';
import Footer from "../Componants/Footer";

function LandingPage(){
    return(
        <div>
            <div>
                <Home />
            </div>
            <div>
                <About />
            </div>
            <div>
                <ContactUs />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default LandingPage;