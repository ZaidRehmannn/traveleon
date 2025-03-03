import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
    const [formData, setformData] = useState({
        name: '',
        email: '',
        phoneno: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setformData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setformData({
            name: '',
            email: '',
            phoneno: '',
            message: ''
        })
    }

    return (
        <div className='container flex flex-col items-center md:flex-row md:px-8 xl:px-20 mb-14 max-w-full'>
            <div className='left basis-1/2 px-8 sm:px-16 pb-5 md:p-8 xl:p-12 space-y-3'>
                <div className='flex items-center gap-2'>
                    <h2 className='text-2xl'>Send us a message</h2>
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className='h-6 w-7' />
                </div>
                <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance planning your perfect getaway, feel free to reach out through our contact form or find our contact details below. Your insights and inquiries help us ensure we provide the best travel experiences tailored just for you.</p>
                <div className='flex flex-col space-y-2'>
                    <div className='space-x-2'>
                        <FontAwesomeIcon icon={faEnvelope} className='h-5 w-5' />
                        <span>Contact@example.dev</span>
                    </div>
                    <div className='space-x-2'>
                        <FontAwesomeIcon icon={faPhone} className='h-5 w-5' />
                        <span>+1 123-456-7890</span>
                    </div>
                    <div className='flex space-x-2'>
                        <FontAwesomeIcon icon={faLocationDot} className='h-5 w-5' />
                        <span className='flex flex-col'>
                            77 Massachusetts Ave, Cambridge<br />
                            MA 02139, United States
                        </span>
                    </div>
                </div>
            </div>
            <form className='right flex flex-col basis-1/2 space-y-3 w-5/6 md:px-10' onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input id='name' type="text" name='name' value={formData.name} placeholder='Enter your name' onChange={handleChange} className='border-2 border-gray-500 w-full rounded-md px-3 py-2 bg-slate-100' />
                <label htmlFor="email">Email Address</label>
                <input id='email' type="email" name='email' value={formData.email} placeholder='Enter your email address' onChange={handleChange} className='border-2 border-gray-500 w-full rounded-md px-3 py-2 bg-slate-100' />
                <label htmlFor="phone">Phone Number</label>
                <input id='phone' type="tel" name='phoneno' value={formData.phoneno} placeholder='Enter your mobile number' onChange={handleChange} className='border-2 border-gray-500 w-full rounded-md px-3 py-2 bg-slate-100' />
                <label htmlFor="message">Write your messages here</label>
                <textarea id='message' rows="4" name='message' value={formData.message} placeholder='Enter your message' onChange={handleChange} className='border-2 border-gray-500 w-full rounded-md px-3 py-2 bg-slate-100'></textarea>
                <button type='submit' className='bg-[#9a9b9b] w-fit px-6 py-2 rounded-xl'>Submit Now</button>
            </form>
        </div>
    )
}

export default Form
