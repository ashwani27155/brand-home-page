import React from "react";
import '../components/Navbar.css'
const Navbar = () =>{
    return(
        <div>
            <header>
                <nav className="navbar">
                    <div className="logo_image">
                        <img src="./images/brand_logo.png" alt="logo image" />
                    </div>
                    <ul>
                        <li>Menu</li>
                        <li>Location</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <button className="login_button">Login</button>
                </nav>
            </header>
        </div>
    )
}
export default Navbar;