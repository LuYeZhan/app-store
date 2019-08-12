import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/thumbnail/ios11-app-store-icon_2x.png" alt="apps store logo" height='50'/>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/apps'>Apps</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
