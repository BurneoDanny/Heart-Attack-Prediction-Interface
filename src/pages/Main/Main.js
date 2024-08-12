import Masthead from "./Masthead/Masthead";
import Prediction from "./More/Prediction";
import NavBar from "components/Navbars/NavBar";
import "./stylesheet.css"
import Footer from "./Footer/Footer";
export default function Main() {
    return (
        <main>
            <NavBar />
            <Masthead />
        </main>
    );
}