import { useState , useEffect } from "react";
import { Link , NavLink ,useLocation } from "react-router-dom";
import logo from '../images/logo.png'

export default function NavBar(){
    const location = useLocation();
    const [navHeight, setNavHeight] = useState("50vh");
    const [postition,setPosition] = useState('')

    useEffect(() => {
        if (location.pathname === '/') {
            setNavHeight("20vh"); 
            setPosition('-230px')

        } else if (location.pathname === '/path') {
            setNavHeight("60vh"); 
            setPosition('-290px')
        } else {
            setNavHeight("20vh"); 
            setPosition('-290px')
        }
    }, [location.pathname]);



    return(
        <div className="navBody">
            <div className="NavBar" style={{height:navHeight , backgroundPositionY:postition}}>
                <div className="navbarWrapper">
                    <div className="NavLogo">
                        <Link to='/' id="logo">
                            <img src={logo} alt="" width={'100px'} height={'90px'} />
                        </Link>
                    </div>
                    <div id="hamburger">
                        ☰
                    </div>
                    <div className="NavItems">
                        <ul>
                            <li>
                                <NavLink to='/' id="link">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/personnal' id="link">Personnal</NavLink>
                            </li>
                            <li>
                                <NavLink to='/path' id="link">Path</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
    );
}