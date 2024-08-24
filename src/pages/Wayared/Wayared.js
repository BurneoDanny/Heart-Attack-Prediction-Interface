import { Link } from "react-router-dom";
import "./Background.css";
import "../../components/Common/Shapes.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as BookIcon } from "assets/svgs/book.svg";
import { ReactComponent as PredictIcon } from "assets/svgs/predict.svg";
import { ReactComponent as ModelIcon } from "assets/svgs/model.svg";
import { ReactComponent as ContactIcon } from "assets/svgs/contact.svg";
import { ReactComponent as ResultIcon } from "assets/svgs/result.svg";
import { ReactComponent as BatchIcon } from "assets/svgs/batchpredict.svg";
import Documentation from "./Documentation/Documentation";
import Dataset from "./Dataset/Dataset";
import Models from "./Models/Models";
import Contact from "./Contact/Contact";
import Prediction from "pages/Main/More/Prediction";
import BatchPrediction from "pages/Main/More/UploadFile";
import { Tooltip as ReactTooltip } from "react-tooltip";
import logo from "assets/images/logo.png";
import wayared from "assets/images/wayaredProHD.jpg";
import ia1 from "assets/images/ia1.jpg";
import ia2 from "assets/images/ia2.jpg";
import ia3 from "assets/images/ia3.jpg";
import ia4 from "assets/images/ia4.jpg";
import ia5 from "assets/images/ia5.jpg";
import ia6 from "assets/images/ia6.jpg";
import ia7 from "assets/images/ia7.jpg";
import ia8 from "assets/images/ia8.jpg";
import ia9 from "assets/images/ia9.jpg";
import ia10 from "assets/images/ia10.jpg";

export default function Wayared() {
  const [isPredictMenuOpen, setPredictMenuOpen] = useState(false);
  const [isDocMenuOpen, setDocMenuOpen] = useState(false);
  const [isModelMenuOpen, setModelMenuOpen] = useState(false);
  const [isResultMenuOpen, setResultMenuOpen] = useState(false);
  const [isContactMenuOpen, setContactMenuOpen] = useState(false);
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  const [isBatchMenuOpen, setBatchMenuOpen] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const images = [ia1, ia2, ia3, ia4, ia5, ia6, ia7, ia8, ia9, ia10, wayared];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const menu = params.get("menu");

    setPredictMenuOpen(false);
    setDocMenuOpen(false);
    setModelMenuOpen(false);
    setResultMenuOpen(false);
    setContactMenuOpen(false);
    setBatchMenuOpen(false);
    switch (menu) {
      case "predict":
        setPredictMenuOpen(true);
        break;
      case "doc":
        setDocMenuOpen(true);
        break;
      case "model":
        setModelMenuOpen(true);
        break;
      case "dataset":
        setResultMenuOpen(true);
        break;
      case "contact":
        setContactMenuOpen(true);
        break;
      case "batchpredict":
        setBatchMenuOpen(true);
        break;
      default:
        break;
    }
  }, [location]);

  const toggleMenu = (menu) => {
    navigate(`/wayared?menu=${menu}`);
  };

  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="flex" id="wayared">
      <aside
        className={`flex flex-col ${
          isSideBarOpen ? "min-w-72 max-w-72" : "min-w-20 max-w-20"
        } h-screen px-5 py-8 overflow-y-auto bg-black-pearl-950 border-r rtl:border-r-0 rtl:border-l transition-all duration-1000 ease-in-out`}
      >
        <Link to={"/"} className="flex justify-center items-center">
          <img
            className={`w-auto ${
              isSideBarOpen ? "h-10" : "h-8"
            } transition-all duration-300 ease-in-out`}
            src={logo}
            alt="wayared_logo"
          />
        </Link>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="flex-1 -mx-3 space-y-1 3xl:space-y-3">
            <div
              onClick={() => toggleMenu("predict")}
              className={`${
                isSideBarOpen ? "" : "justify-center"
              } cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}
            >
              {isSideBarOpen ? (
                <>
                  <PredictIcon className="w-8 h-8" />
                  <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">
                    Predict
                  </span>
                </>
              ) : (
                <PredictIcon
                  data-tooltip-id="predict-tooltip"
                  className="w-12 h-12"
                />
              )}
            </div>

            <div
              onClick={() => toggleMenu("batchpredict")}
              className={`${
                isSideBarOpen ? "" : "justify-center"
              } cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}
            >
              {isSideBarOpen ? (
                <>
                  <BatchIcon className="w-8 h-8" />
                  <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">
                    CSV Predict
                  </span>
                </>
              ) : (
                <BatchIcon
                  data-tooltip-id="contact-tooltip"
                  className="w-8 h-8"
                />
              )}
            </div>

            <div
              onClick={() => toggleMenu("doc")}
              className={`${
                isSideBarOpen ? "" : "justify-center"
              } cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}
            >
              {isSideBarOpen ? (
                <>
                  <BookIcon className="w-8 h-8" />
                  <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">
                    Documentation
                  </span>
                </>
              ) : (
                <BookIcon data-tooltip-id="doc-tooltip" className="w-8 h-8" />
              )}
            </div>

            <div
              onClick={() => toggleMenu("model")}
              className={`${
                isSideBarOpen ? "" : "justify-center"
              } cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}
            >
              {isSideBarOpen ? (
                <>
                  <ModelIcon className="w-8 h-8" />
                  <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">
                    Models
                  </span>
                </>
              ) : (
                <ModelIcon
                  data-tooltip-id="model-tooltip"
                  className="w-8 h-8"
                />
              )}
            </div>

            <div
              onClick={() => toggleMenu("dataset")}
              className={`${
                isSideBarOpen ? "" : "justify-center"
              } cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}
            >
              {isSideBarOpen ? (
                <>
                  <ResultIcon className="w-8 h-8" />
                  <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">
                    Dataset
                  </span>
                </>
              ) : (
                <ResultIcon
                  data-tooltip-id="result-tooltip"
                  className="w-8 h-8"
                />
              )}
            </div>

            <div
              onClick={() => toggleMenu("contact")}
              className={`${
                isSideBarOpen ? "" : "justify-center"
              } cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}
            >
              {isSideBarOpen ? (
                <>
                  <ContactIcon className="w-8 h-8" />
                  <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">
                    Contact Us
                  </span>
                </>
              ) : (
                <ContactIcon
                  data-tooltip-id="contact-tooltip"
                  className="w-8 h-8"
                />
              )}
            </div>
          </nav>

          {isSideBarOpen && (
            <div className="mt-6 hidden xl:block transition-all duration-1000 ease-in-out">
              <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h2 className="text-xs 3xl:text-sm font-medium text-gray-800 dark:text-white">
                  Use any model to predict now!
                </h2>
                <p className="mt-1 text-[10px] 3xl:text-xs text-gray-500 dark:text-gray-400">
                  Click{" "}
                  <a
                    href="https://heart-attack-prediction-models.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    here
                  </a>{" "}
                  if prediction is not working, then wait for a few seconds and
                  try again.
                </p>
                <img
                  className="object-cover w-full h-32 mt-2 rounded-lg"
                  src={randomImage}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </aside>

      <div className="relative w-full">
        <div
          className={`${
            isSideBarOpen ? "cross" : "hamburger-menu"
          } absolute left-0 top-0 m-3 cursor-pointer z-10`}
          onClick={toggleSideBar}
        ></div>
        {isPredictMenuOpen && <Prediction />}
        {isDocMenuOpen && <Documentation />}
        {isModelMenuOpen && <Models />}
        {isResultMenuOpen && <Dataset />}
        {isContactMenuOpen && <Contact />}
        {isBatchMenuOpen && <BatchPrediction />}
      </div>

      <ReactTooltip id="predict-tooltip" place="bottom" content="Predict" />
      <ReactTooltip id="doc-tooltip" place="bottom" content="Documents" />
      <ReactTooltip id="model-tooltip" place="bottom" content="Models" />
      <ReactTooltip id="result-tooltip" place="bottom" content="Results" />
      <ReactTooltip id="contact-tooltip" place="bottom" content="Contact Us" />
      <ReactTooltip id="contact-tooltip" place="bottom" content="CSV Prediction" />
    </div>
  );
}
