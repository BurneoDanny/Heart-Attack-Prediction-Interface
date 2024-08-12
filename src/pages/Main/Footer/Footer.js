import logo from "assets/images/logo.png"


export default function Footer() {
    return (
        <footer className="footer w-screen">
            <div className="footer-container w-full">
                <div className="col">
                    <img className="footer-logo" src={logo}></img>
                    <ul className="items-list-container">
                        <li className="item-list border-2 duration-300 ease-in-out hover:bg-black-pearl-500"><a className="a-item-list">A</a></li>

                        <li className="item-list border-2 duration-300 ease-in-out hover:bg-black-pearl-500"><a className="a-item-list">A</a></li>

                        <li className="item-list border-2 duration-300 ease-in-out hover:bg-black-pearl-500"><a className="a-item-list">A</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className="section-title">Sections</h3>
                    <ul className="sections-items">
                        <li className="item-list ">Predict</li>
                        <li className="item-list">Documentation</li>
                        <li className="item-list">Model</li>
                        <li className="item-list">Analytical Results</li>
                        <li className="item-list">Contact Us</li>
                    </ul>

                </div>
            </div>
        </footer>
    );
}