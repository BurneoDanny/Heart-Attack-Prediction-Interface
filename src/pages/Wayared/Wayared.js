import { Link } from "react-router-dom";
import "./Background.css";
import { useState } from "react";
import logo from "assets/images/logo.png";
import { useEffect } from "react";
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

export default function Wayared() {
    const [isPredictMenuOpen, setPredictMenuOpen] = useState(false);
    const [isDocMenuOpen, setDocMenuOpen] = useState(false);
    const [isModelMenuOpen, setModelMenuOpen] = useState(false);
    const [isResultMenuOpen, setResultMenuOpen] = useState(false);
    const [isContactMenuOpen, setContactMenuOpen] = useState(false);
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

    const toogleMenu = (menu) => {
        navigate(`/wayared?menu=${menu}`);
    }

    return (
        <div className="flex" id="wayared">
            <aside class="flex flex-col w-72 h-screen px-5 py-8 overflow-y-auto bg-black-pearl-950 border-r rtl:border-r-0 rtl:border-l">
                <Link to={"/"} className="flex justify-center items-center">
                    <img class="w-auto h-12" src={logo} alt="wayared_logo" />
                </Link>

                <div class="flex flex-col justify-between flex-1 mt-6">
                    <nav class="flex-1 -mx-3 space-y-3 ">

                        <div onClick={() => toogleMenu('predict')} class="cursor-pointer flex items-center px-3 py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50" href="#">
                            <PredictIcon className="w-8 h-8" />
                            <span class="mx-2 text-2xl font-medium">Predict</span>
                        </div>

                        <div onClick={() => toogleMenu('doc')} class="cursor-pointer flex items-center px-3 py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50" href="#">
                            <BookIcon className="w-8 h-8" />
                            <span class="mx-2 text-2xl font-medium">Documentation</span>
                        </div>

                        <div onClick={() => toogleMenu('model')} class="cursor-pointer flex items-center px-3 py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50" href="#">
                            <ModelIcon className="w-8 h-8" />
                            <span class="mx-2 text-2xl font-medium">Models</span>
                        </div>

                        <div onClick={() => toogleMenu('result')} class="cursor-pointer flex items-center px-3 py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50" href="#">
                            <ResultIcon className="w-8 h-8" />
                            <span class="mx-2 text-2xl font-medium">Results</span>
                        </div>

                        <div onClick={() => toogleMenu('contact')} class="cursor-pointer flex items-center px-3 py-4 text-black-pearl-50 transition-colors duration-300 transform rounded-lg hover:bg-black-pearl-500 hover:text-black-pearl-50" href="#">
                            <ContactIcon className="w-8 h-8" />
                            <span class="mx-2 text-2xl font-medium">Contact Us</span>
                        </div>

                    </nav>

                    <div class="mt-6">
                        <div class="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white">Use any model to predict now!</h2>

                            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>

                            <img class="object-cover w-full h-32 mt-2 rounded-lg" src="https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </aside>
            <div className="content">
                {isPredictMenuOpen && <Prediction />}
                {isDocMenuOpen && <Documentation />}
                {isModelMenuOpen && <Models />}
                {isResultMenuOpen && <Analysis />}
                {isContactMenuOpen && <Contact />}
            </div>
        </div>
    );
}