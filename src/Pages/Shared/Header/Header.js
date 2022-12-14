import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/places'>Places</Link></li>
        <li><Link to='/hot'>Hot Deals</Link></li>
        <li><Link to='/guides'>Guides</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li>
            {
                user && <>
                    <Link to="/addplace">Add</Link>
                    <Link to="/manage">Manage</Link>
                </>
            }
        </li>
        <li>{user ?
            <button onClick={logOut} className="btn btn-link">Sign Out</button>
            :
            <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='w-28' src={logo} alt="" />
            </div>
            <div className="text-white navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;