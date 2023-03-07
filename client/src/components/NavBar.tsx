import '../css/components.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/final.svg'
import { AiFillCaretDown } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import i18next from 'i18next'



const NavBar = () =>{

    const languages = [
        {
            id: 1,
            code: "en",
            name: "EN"
        },
        {
            id: 2,
            code: "de",
            name: "DE"
        },
        {
            id: 3,
            code: "al",
            name: "AL"
        }
    ]

    const Nav = {
        Home: "HOME",
        AboutUs: "ABOUT US ",
        Services: "OUR SERVICES ",
        Contact: "CONTACT US ",
        SingIn: "SING IN "
    }
    
    let activeClassName = "active-link link";

    const { currentUser, logout } = useContext(AuthContext);

    const name = currentUser?.name ?? '';

    return(
        <div className="navbar">
            <nav className="text">
                <Link to={'/'}><img src={Logo} className="logo"/></Link> 
                <ul className="nav">
                    <li> <NavLink className='link' to='/'  >{Nav.Home} <div className="underline"></div> </NavLink>
                    
                    </li>
                    <li><NavLink className="link" to='/about'>{Nav.AboutUs} <div className="underline"></div> </NavLink>
                    </li>
                    <li className="link">
                    <div className="dropdown">
                        <button className="dropbtn link">{Nav.Services} 
                        <AiFillCaretDown/>
                        </button>
                        <div className="dropdown-content">
                        <Link to='/posts' > RECRUITMENT </Link>
                        <Link to='/smm' > SMM ADVERTISING </Link>
                        <Link to='/digital' > DIGITAL </Link>
                        <Link to='/marketing'> MARKETING </Link>
                        <Link to='/graphic-design'> GRAPHIC DESIGN </Link>
                        <Link to='/webdev' > WEB DEVELOPMENT </Link>
                        </div>
                    </div> 

                    <div className="underline" ></div>
                    </li>
                    <li><NavLink className="link" to='/contact'>{Nav.Contact} <div className="underline"></div> </NavLink>
                    </li>
                    {name? 
                        <li ><span className="link" onClick={logout} style={{color:'#9D3EC1'}}> LOGOUT <div className="underline"></div> </span></li>
                    :
                        <li ><NavLink className="link" to='/login'style={{color:'#9D3EC1'}}>{Nav.SingIn} <div className="underline"></div> </NavLink></li>
                        }
                    <li style={{marginLeft: '4px'}}>
                    <div className="dropdown">
                        <button className="dropbtn link"> <BsGlobe/>
                        <AiFillCaretDown/>
                        </button>
                        <div className="dropdown-content language">
                            {languages.map((language) => (
                                <span key={language.id} onClick={() => i18next.changeLanguage(language.code)}> {language.name} </span>
                            ) )}
                        </div>
                    </div> 
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;