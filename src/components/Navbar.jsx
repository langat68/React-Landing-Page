
import { useState } from "react"
import '../styles/Navbar.css'
import Dropdown from "./Dropdown"

const ProductItems = [
    {
        id: 0,
        name: "Overview"
    },
    {
        id: 1,
        name: "Pricing"
    },
    {
        id: 2,
        name: "Marketplace"
    },
    {
        id: 3,
        name: "Features"
    },
    {
        id: 4,
        name: "Integrations"
    }
]

const CompanyItems = [
    {
        id: 0,
        name: "About"
    },
    {
        id: 1,
        name: "Team"
    },
    {
        id: 2,
        name: "Blog"
    },
    {
        id: 3,
        name: "Careers"
    }
]

const ConnectItems = [
    {
        id: 0,
        name: "Contact"
    },
    {
        id: 1,
        name: "Newsletter"
    },
    {
        id: 2,
        name: "LinkedIn"
    },
]

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    function toggleIsOpen(){
        setIsOpen(prev => !prev)
    }

    return (
        <nav>
            <img className="logo" src="/images/logo.svg" alt="Logo"></img>
            <img className="menu-btn" src={`/images/icon-${isOpen ? "close" : "hamburger"}.svg`} onClick={toggleIsOpen} alt="Menu Button"></img>
            <div className={`nav-items ${isOpen ? "opened" : ""}`}>
                <Dropdown title='Product' elements={ProductItems} />
                <Dropdown title='Company' elements={CompanyItems} />
                <Dropdown title='Connect' elements={ConnectItems} />
                <div className="divider"></div>
                <div className="header-btns">
                    <div className="login-btn">Login</div>
                    <div className='signup-btn'>Sign Up</div>
                </div>
            </div>
        </nav>
    )
}