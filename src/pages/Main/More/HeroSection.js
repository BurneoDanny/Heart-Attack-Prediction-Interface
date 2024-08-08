import video_introduce from "assets/videos/video_introduce.mp4";


function HeroSection() {
    return (
        <div className="relative h-screen w-full">
            <div className="absolute h-full -z-10">
                <video className="" autoPlay loop muted playsInline>
                    <source src={video_introduce} type="video/mp4"></source>
                </video>
            </div>
            <div className="flex justify-center items-center h-full flex-col text-black-pearl-50">
                <h1 className="text-[5em] font-bold">Heart-Attack Prediction System</h1>
                <h2 className="text-[2em]">2024</h2>
            </div>
        </div>
    )
}

export default HeroSection;