import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCircleInfo, faBriefcase, faAddressBook, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [mobileMenu, setmobileMenu] = useState(false);

    const toggleMenu = () => {
        setmobileMenu(!mobileMenu);
    }

    const location = useLocation();
    const isAboutOrServicesOrContactPage = location.pathname === '/about' || location.pathname === '/services' || location.pathname === '/contact';

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signup');
    };

    return (
        <div className='relative'>
            <nav className={`${mobileMenu ? "translate-x-0" : "translate-x-full"} transform fixed right-0 top-0 bg-gray-800 h-screen w-[75%] sm:w-[50%] z-20 transition-transform duration-300 ease-in-out lg:hidden`}>
                <FontAwesomeIcon
                    icon={faXmark}
                    className='absolute top-6 right-6 h-8 w-8 cursor-pointer text-white'
                    onClick={toggleMenu}
                />
                <h2 className='absolute z-10 top-5 left-6 font-bold text-3xl text-white'>Traveleon</h2>
                <ul className='flex flex-col py-24 space-y-6 items-start font-semibold text-sm px-6 text-white'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'cursor-pointer underline underline-offset-8 decoration-2' : ''}>
                        <div className='space-x-2 flex items-center'>
                            <FontAwesomeIcon icon={faHouseUser} />
                            <span>Home</span>
                        </div>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'cursor-pointer underline underline-offset-8 decoration-2' : ''}>
                        <div className='space-x-2 flex items-center'>
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <span>About</span>
                        </div>
                    </NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? 'cursor-pointer underline underline-offset-8 decoration-2' : ''}>
                        <div className='space-x-2 flex items-center'>
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span>Services</span>
                        </div>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'cursor-pointer underline underline-offset-8 decoration-2' : ''}>
                        <div className='space-x-2 flex items-center'>
                            <FontAwesomeIcon icon={faAddressBook} />
                            <span>Contact</span>
                        </div>
                    </NavLink>
                    <button onClick={handleClick} className='text-xl px-5 py-2 font-normal bg-gray-200 rounded-md hover:bg-gray-300 text-gray-950'>Sign Up</button>
                </ul>
            </nav>

            {!mobileMenu && (
                <FontAwesomeIcon
                    icon={faBars}
                    className={`block lg:hidden cursor-pointer z-20 absolute top-5 right-6 h-8 w-8 ${isAboutOrServicesOrContactPage ? 'text-white' : ''}`}
                    onClick={toggleMenu}
                />
            )}

            <nav className='hidden lg:flex fixed w-[calc(100%-3rem)] h-14 justify-between items-center px-12 py-4 bg-gray-800 m-5 rounded-xl z-20'>
                <h2 className='font-bold text-2xl text-white'>Traveleon</h2>
                <ul className='flex space-x-10 items-center font-semibold text-white'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'cursor-pointer underline underline-offset-8 decoration-2' : 'cursor-pointer hover:underline underline-offset-8 decoration-2'}>
                        <div className='flex items-center space-x-3'>
                            <FontAwesomeIcon icon={faHouseUser} />
                            <span>Home</span>
                        </div>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'cursor-pointer underline underline-offset-8 decoration-2' : 'cursor-pointer hover:underline underline-offset-8 decoration-2'}>
                        <div className='flex items-center space-x-3'>
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <span>About</span>
                        </div>
                    </NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? 'cursor-pointer underline underline-offset-8 decoration-2' : 'cursor-pointer hover:underline underline-offset-8 decoration-2'}>
                        <div className='flex items-center space-x-3'>
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span>Services</span>
                        </div>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'cursor-pointer underline underline-offset-8 decoration-2' : 'cursor-pointer hover:underline underline-offset-8 decoration-2'}>
                        <div className='flex items-center space-x-3'>
                            <FontAwesomeIcon icon={faAddressBook} />
                            <span>Contact</span>
                        </div>
                    </NavLink>
                    <button onClick={handleClick} className='px-5 py-2 font-normal bg-gray-200 rounded-md hover:bg-gray-300 text-gray-950'>Sign Up</button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
