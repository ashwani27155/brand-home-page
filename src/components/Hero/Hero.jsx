import React from "react";
import '../Hero/Hero.css'
const Hero = () =>{
    return(
    <div className="hero_section">
        <div>
            <div>
                <h1>YOUR FEET 
                    DESERVE
                    THE BEST
                </h1>
                <p className="desc">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
            <div>
                <button className="shopnow_button">Shop Now</button>
                <button className="category_button">Category</button>
            </div>
            <div>
                <p>Also Available On</p>
                <div>
                    <img src="./images/flipkart.png" alt="flipkart image" />
                    <img src="./images/amazon.png" alt="amazon image" />
                </div>
            </div>
        </div>
        <div>
            <img src="./images/shoe_image.png" alt="shoe image" />
        </div>
    </div>
    )
}
export default Hero