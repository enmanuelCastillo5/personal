import React from 'react'
import { Link } from 'react-router-dom'
/*import Home from '../pages/Home'
import Photos from '../pages/Photos'
import Usuarios from '../pages/Usuarios'
import Posts from '../pages/Posts'
import Login from '../pages/Login' */

const Navbar = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-11">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/usuarios" className="nav-link">Usuarios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/posts" className="nav-link">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/photos" className="nav-link">Photos</Link>
                        </li>
                     </ul>
                </div>

                <div className="col-1">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link active">Iniciar Session</Link>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
    )
}

export default Navbar