import video_introduce from "./images/electrocardiogram.mp4"


function HeroSection(){
    return(<div id="hero-section">
        <div>
            <video id="video-hero" autoPlay loop muted playsInline>
                <source src={video_introduce} type="video/mp4"></source>
            </video>
        </div>
        <div id="titles-hero">
            <h1 id="titleh1" className="titles">Heart-Attack Predictions</h1>
            <h2 id= "titleh2" className="titles">Some Title here</h2>
        </div>
    </div>)
}

export default HeroSection;