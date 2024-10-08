import { useRef, useState, useEffect } from 'react';
import  emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const YOUR_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const YOUR_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const YOUR_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
            publicKey: YOUR_PUBLIC_KEY,
          })
          .then((result) => {
              console.log("result",result.text);
              setIsSent(true); // Show success message
              setTimeout(() => setIsSent(false), 10000); // Hide message after 10 seconds
          }, (error) => {
              console.log(error);
          });
      };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-[#1BFFFF] to-[#2E3192] mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development pojects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-[#1BFFFF] mr-2'></FaEnvelope>
                <span>
                    genemlowe@gmail.com
                </span>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-[#1BFFFF] mr-2'></FaPhone>
                <span>+255 718 413 758</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-[#1BFFFF] mr-2'></FaMapMarkedAlt>
                <span>Dar es salaam, Tanzania</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" name='user_name'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-[#1BFFFF]'
                    placeholder='Enter You Name'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input type="text" name='user_email'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-[#1BFFFF]'
                    placeholder='Enter You Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" name='message'
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-[#1BFFFF]'
                    rows="5"
                    placeholder='Enter You Message'/>
                </div>
                <button className='bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
            {isSent && (
                 <div className='mt-4 p-4 bg-green-500 text-white rounded'>
                 Email sent successfully!
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact