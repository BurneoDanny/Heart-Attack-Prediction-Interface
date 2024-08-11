import video_introduce from "assets/videos/video_introduce.mp4";
import { Link } from "react-router-dom";
import "./Animation.css"

function HeroSection() {
    return (
        <div className="relative h-screen w-screen">
            <div className="absolute  inset-0 overflow-hidden h-full -z-10">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src={video_introduce} type="video/mp4"></source>
                </video>
            </div>
            <div className="flex justify-center items-center h-full flex-col text-black-pearl-50 ">
                <div className="flex flex-col justify-center items-center mb-8">
                    <h1 className="text-[3em] 3xl:text-[5em] font-bold">Heart-Attack Prediction System</h1>
                    <h2 className="text-[2em] 3xl:text-[2em]">2024</h2>
                </div>
                <Link to={'/wayared?menu=predict'} class="group relative inline-flex items-center justify-start overflow-hidden rounded-sm px-5 py-3 font-bold">
                    <span class="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-black-pearl-50 opacity-[3%]"></span>
                    <span class="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-black-pearl-50 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                    <span class="text-2xl relative w-full text-left text-black-pearl-50 transition-colors duration-200 ease-in-out group-hover:text-black">Predict</span>
                    <span class="absolute inset-0 rounded-sm border-2 border-black-pearl-50"></span>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection;