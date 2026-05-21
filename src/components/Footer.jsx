import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        
        <div className="space-y-4">
          <div className="text-white text-xl font-bold tracking-wider">
            DRIVE<span className="text-orange-500">FLEET</span>
          </div>
          <p className="text-sm text-neutral-500 max-w-sm">
            Experience premium car rentals engineered for comfort, luxury, and seamless journeys.
          </p>
          <div className="text-sm space-y-2 pt-2">
            <p><span className="text-neutral-500">Email:</span> support@drivefleet.com</p>
            <p><span className="text-neutral-500">Phone:</span> 01234567891</p>
            <p><span className="text-neutral-500">HQ:</span> Kotwali, Chittagong</p>
          </div>
        </div>

       
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Useful Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-500 transition-colors duration-200">
                Home Base
              </Link>
            </li>
            <li>
              <Link href="/explore" className="hover:text-orange-500 transition-colors duration-200">
                Explore Our Fleet
              </Link>
            </li>
            <li>
              <Link href="/add-car" className="hover:text-orange-500 transition-colors duration-200">
                List Your Vehicle
              </Link>
            </li>
            <li>
              <Link href="/my-booking" className="hover:text-orange-500 transition-colors duration-200">
                Manage Bookings
              </Link>
            </li>
          </ul>
        </div>

       
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Connect With Us</h4>
          <p className="text-sm text-neutral-500">
            Follow our updates on upcoming luxury arrivals and premium features.
          </p>
          <div className="flex gap-4 pt-2">
           
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500 transition-all duration-300 text-sm font-semibold">
              <FaFacebook/>
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500 transition-all duration-300 text-sm font-semibold">
             <FaInstagram/>
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500 transition-all duration-300 text-sm font-semibold">
              <FaSquareXTwitter/>
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500 transition-all duration-300 text-sm font-semibold">
              <FaLinkedin/>
            </a>
          </div>
        </div>

      </div>

     
      <div className="max-w-7xl mx-auto border-t border-neutral-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
        <p>&copy; {new Date().getFullYear()} DriveFleet Inc. All rights academic assignment.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
            
        </div>
    );
};

export default Footer;