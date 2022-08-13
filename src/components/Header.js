import React from 'react'
import {SiSpacex} from 'react-icons/si'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
        <header className='header-nav'>
            <div>
                <Link to='/'>
                    {}
                    <SiSpacex className='sispace'/>
                </Link>

            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/capsules" className='capsules'>Capsules</Link>
                    </li>
                    {/* <li> 
                        <Link></Link>
                    </li>
                    <li>
                        <Link></Link>
                    </li>
                    <li>
                        <Link></Link>
                    </li>
                    <li>
                        <Link></Link>
                    </li>
                    <li>
                         <Link></Link>
                    </li>
                    <li>
                        <Link></Link>
                    </li>
                    <li>
                         <Link></Link>
                    </li>
                    <li>
                        <Link></Link>
                    </li>
                    <li>
                        <Link></Link>
                    </li>
                    <li>
                        <Link></Link>
                    </li>
                    <li>
                        <Link></Link>
                    </li> */}


                </ul>
            </nav>
        </header>

    )
}
