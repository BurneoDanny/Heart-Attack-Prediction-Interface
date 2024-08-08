import "./stylesheet.css"
import logo from "./images/logo.png"

function NavBar(){

    return(<nav id="navbar">
        <div className="nav-container">
            <div className="logo-container"><img id="logo" src={logo}></img>
            </div>
            <div className="nav-buttons">
                <ul id = "nav-buttons-list">
                    <il className="nav-button"><a class="nav-link" href="#prediction-section">Predict</a></il>
                    <il className="nav-button"><a class="nav-link" href="#prediction-section">Statistics</a></il>
                    <il className="nav-button"><a class="nav-link" href="#prediction-section">Graphics</a></il>
                    <il className="nav-button"><a class="nav-link" href="#prediction-section">Contact</a></il>
                </ul>
            </div>
        </div>
    </nav>);
}

export default NavBar;