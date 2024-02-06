import React from "react";
import { Link } from "react-router-dom";
import {CgAlignTop} from "react-icons/cg"
import { BiSearch } from "react-icons/bi";
import {BiCube } from "react-icons/bi";

const NavBar = () => {
    const Icon = {
        position:'relative',
        top: '0.3rem'
    }
    const  Icon1 = {
        position:'relative',
        top: '0.17rem'
    }
    const navBar = {
        width: '90%',
        margin: '0 auto',
    }
    const neLca = {
        padding: '5px 14px',
        borderRadius: '1028px',
        border: 'none', 
        background: 'linear-gradient(#167af4, #00c1de)',
        color: 'white',
        fontWeight:'500'
    }
    const LLogo = {
        position: 'relative',
        top: '4px',
    }
    
    return ( 
        <div>
            <div >
                <div className="navbar-fixed ">
                    <nav className="white navBar z-depth-1 NAVBAR">
                        <div className="nav-wrapper " style={navBar}>
                            <i className="hide-on-large-only material-icons left black-text">menu</i>
                            <a href="/" className="black-text brand-logo left"  style={{fontWeight: '500', letterSpacing: '2px'}}><CgAlignTop style={LLogo}/>NETLIFY</a>
                        <ul id="nav-mobile" className="hide-on-med-and-down right headeR"> 
                            <li className="fort"><Link to="/addHostel" className="black-text" >Add Hostel</Link></li>
                            <li><Link to="/search" ><BiSearch style={Icon}/>search</Link></li>
                            <li><Link to="/offer" className="black-text">Offers</Link></li>
                            <li><Link to="./help" className="black-text"><BiCube style={Icon1}/>Help</Link></li>
                            <li><Link to="/cart" className="black-text">Cart</Link></li>
                            <li><Link to='/Login'><button style={neLca}>Login</button></Link></li>
                            <li><Link to='/SignUp'><button style={neLca}>SignUp</button></Link></li>
                            {/* <button style={loginBtn} className="btn">Login</button> */}
                            {/* <Signup/> */}
                            {/* <button className="btn" style={signUpBtn}>Sign Up</button> */}
                        </ul>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;