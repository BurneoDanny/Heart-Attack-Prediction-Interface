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
import Documentation from "./Documentation/Documentation";
import Analysis from "./Analysis/Analysis";
import Models from "./Models/Models";
import Contact from "./Contact/Contact";
import Prediction from "pages/Main/More/Prediction";
import { Tooltip as ReactTooltip } from "react-tooltip";
import logo from "assets/images/logo.png";
import wayared from "assets/images/wayaredProHD.jpg";

export default function Wayared() {
    const [isPredictMenuOpen, setPredictMenuOpen] = useState(false);
    const [isDocMenuOpen, setDocMenuOpen] = useState(false);
    const [isModelMenuOpen, setModelMenuOpen] = useState(false);
    const [isResultMenuOpen, setResultMenuOpen] = useState(false);
    const [isContactMenuOpen, setContactMenuOpen] = useState(false);
    const [isSideBarOpen, setSideBarOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const menu = params.get('menu');

        setPredictMenuOpen(false);
        setDocMenuOpen(false);
        setModelMenuOpen(false);
        setResultMenuOpen(false);
        setContactMenuOpen(false);

        switch (menu) {
            case 'predict':
                setPredictMenuOpen(true);
                break;
            case 'doc':
                setDocMenuOpen(true);
                break;
            case 'model':
                setModelMenuOpen(true);
                break;
            case 'result':
                setResultMenuOpen(true);
                break;
            case 'contact':
                setContactMenuOpen(true);
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
                className={`flex flex-col ${isSideBarOpen ? 'min-w-72 max-w-72' : 'min-w-20 max-w-20'} h-screen px-5 py-8 overflow-y-auto bg-black-pearl-950 border-r rtl:border-r-0 rtl:border-l transition-all duration-1000 ease-in-out`}
            >
                <Link to={"/"} className="flex justify-center items-center">
                    <img className={`w-auto ${isSideBarOpen ? 'h-10' : 'h-8'} transition-all duration-300 ease-in-out`} src={logo} alt="wayared_logo" />
                </Link>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="flex-1 -mx-3 space-y-1 3xl:space-y-3">
                        <div onClick={() => toggleMenu('predict')} className={`${isSideBarOpen ? '' : 'justify-center'} cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}>
                            {isSideBarOpen ? (
                                <>
                                    <PredictIcon className="w-8 h-8" />
                                    <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">Predict</span>
                                </>
                            ) : (
                                <PredictIcon data-tooltip-id="predict-tooltip" className="w-12 h-12" />
                            )}
                        </div>

                        <div onClick={() => toggleMenu('doc')} className={`${isSideBarOpen ? '' : 'justify-center'} cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}>
                            {isSideBarOpen ? (
                                <>
                                    <BookIcon className="w-8 h-8" />
                                    <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">Documentation</span>
                                </>
                            ) : (
                                <BookIcon data-tooltip-id="doc-tooltip" className="w-8 h-8" />
                            )}
                        </div>

                        <div onClick={() => toggleMenu('model')} className={`${isSideBarOpen ? '' : 'justify-center'} cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}>
                            {isSideBarOpen ? (
                                <>
                                    <ModelIcon className="w-8 h-8" />
                                    <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">Models</span>
                                </>
                            ) : (
                                <ModelIcon data-tooltip-id="model-tooltip" className="w-8 h-8" />
                            )}
                        </div>

                        <div onClick={() => toggleMenu('result')} className={`${isSideBarOpen ? '' : 'justify-center'} cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}>
                            {isSideBarOpen ? (
                                <>
                                    <ResultIcon className="w-8 h-8" />
                                    <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">Results</span>
                                </>
                            ) : (
                                <ResultIcon data-tooltip-id="result-tooltip" className="w-8 h-8" />
                            )}
                        </div>

                        <div onClick={() => toggleMenu('contact')} className={`${isSideBarOpen ? '' : 'justify-center'} cursor-pointer flex items-center px-3 py-2 3xl:py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50`}>
                            {isSideBarOpen ? (
                                <>
                                    <ContactIcon className="w-8 h-8" />
                                    <span className="mx-2 text-base lg:text-xl 3xl:text-2xl font-medium">Contact Us</span>
                                </>
                            ) : (
                                <ContactIcon data-tooltip-id="contact-tooltip" className="w-8 h-8" />
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
                                    Soy un otaku nivel OMEGA 3, mi vida es un anime y necesito a mi heroine para completar mi historia u.u. Busco a una kawaii que me soporte en mi obsesión por el manga y el anime, que me dé ramen cuando tenga hambre y que me deje ver mi colección de figuritas sin juzgarme Si eres una girl gamer que puede soportar mi nivel de otakismo, ¡vamos a crear un amor épico que hará que el de Kirito y Asuna parezca un cuento de hadas!
                                </p>
                                <img className="object-cover w-full h-32 mt-2 rounded-lg" src={wayared} alt="" />
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            <div className="relative">
                <div className={`${isSideBarOpen ? 'cross' : 'hamburger-menu'} absolute left-0 top-0 m-3 cursor-pointer z-10`} onClick={toggleSideBar}></div>
                {isPredictMenuOpen && <Prediction />}
                {isDocMenuOpen && <Documentation />}
                {isModelMenuOpen && <Models />}
                {isResultMenuOpen && <Analysis />}
                {isContactMenuOpen && <Contact />}
            </div>

            <ReactTooltip id="predict-tooltip" place="bottom" content="Predict" />
            <ReactTooltip id="doc-tooltip" place="bottom" content="Documents" />
            <ReactTooltip id="model-tooltip" place="bottom" content="Models" />
            <ReactTooltip id="result-tooltip" place="bottom" content="Results" />
            <ReactTooltip id="contact-tooltip" place="bottom" content="Contact Us" />
        </div>
    );
}
