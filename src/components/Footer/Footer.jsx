import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <div className='bg-gray-950 text-white pt-10 pb-6 px-6 lg:px-16'>
                <div className="top flex justify-between items-center mb-8">
                    <div className="top-left">
                        <h2 className='text-2xl sm:text-3xl pb-1'>Traveleon</h2>
                        <p className='text-sm font-light'>Choose your favourite destination.</p>
                    </div>
                    <div className="top-right flex items-center space-x-2 lg:space-x-3">
                        <FontAwesomeIcon className='w-6 h-6 cursor-pointer' icon={faSquareFacebook} />
                        <FontAwesomeIcon className='w-6 h-6 cursor-pointer' icon={faSquareInstagram} />
                        <FontAwesomeIcon className='w-6 h-6 cursor-pointer' icon={faEnvelope} />
                        <FontAwesomeIcon className='w-6 h-6 cursor-pointer' icon={faSquareTwitter} />
                    </div>
                </div>
                <div className="bottom grid grid-cols-2 gap-y-8 pl-5 lg:pl-0 lg:grid-cols-4 lg:gap-y-0 lg:gap-x-8 lg:px-20">
                    <div>
                        <h3 className='font-semibold pb-2'>Project</h3>
                        <ul className='text-sm font-light space-y-1'>
                            <li>Changelog</li>
                            <li>Status</li>
                            <li>License</li>
                            <li>All Versions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold pb-2'>Community</h3>
                        <ul className='text-sm font-light space-y-1'>
                            <li>GitHub</li>
                            <li>Issues</li>
                            <li>Project</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold pb-2'>Help</h3>
                        <ul className='text-sm font-light space-y-1'>
                            <li>Support</li>
                            <li>Troubleshooting</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold pb-2'>Others</h3>
                        <ul className='text-sm font-light space-y-1'>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>License</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-gray-950 text-white bottom p-4 text-center border-t-[1px]'>
                <span>© 2024 Traveleon. All rights reserved.</span>
            </div>
        </>
    )
}

export default Footer;
