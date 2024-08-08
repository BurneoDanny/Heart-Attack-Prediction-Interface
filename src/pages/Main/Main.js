import HeroSection from "./More/HeroSection";
import Prediction from "./More/Prediction";
import Details from "./More/Details";
import NavBar from "components/Navbars/NavBar";
import "./stylesheet.css"
export default function Main() {
    return (
        <main>
            <NavBar />
            <HeroSection />
            <Prediction />
            <Details />
        </main>
    );
}