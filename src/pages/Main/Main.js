import Masthead from "./Masthead/Masthead";
import Prediction from "./More/Prediction";
import NavBar from "components/Navbars/NavBar";
import "./stylesheet.css";
import Footer from "./Footer/Footer";
import "./Main.css";

export default function Main() {
  return (
    <main>
      <div id="desktop">
        <NavBar />
        <Masthead />
      </div>
      <div id="mobile">
        <Prediction />
      </div>
    </main>
  );
}
