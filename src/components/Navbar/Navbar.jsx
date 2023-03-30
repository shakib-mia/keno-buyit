import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/logo.png'

const Navbar = () => {
    const navbarItem = [
        {
            link: '/',
            text: 'home'
        }
    ]
    return (
        <nav className='fixed top-0'>
            <div className='flex justify-between items-center px-28 py-5 w-screen'>
                <NavLink to='/' className='flex justify-between items-center'>
                    <img src={logo} className="w-12" alt="" />
                    <h1 className='font-medium text-[32px] mt-2'>uyIt</h1>
                </NavLink>
                <ul className='flex gap-5'>
                    {navbarItem.map(({ link, text }, key) => <li key={key}>
                        <NavLink to={link}>{text}</NavLink>
                    </li>)}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;