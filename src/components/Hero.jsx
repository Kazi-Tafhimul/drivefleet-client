import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className="relative w-full min-h-[90vh] bg-neutral-950 flex flex-col justify-between items-center px-6 overflow-hidden">
      
     
     <div className="absolute inset-0 z-0">
       
        <Image
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1920&auto=format&fit=crop"
          alt="Premium Luxury Car"
          fill 
          priority 
          className="object-cover opacity-50" 
        />
       
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      
      <div className="relative z-10 text-center max-w-4xl mt-24 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Find the Perfect Car for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-orange-500">
            Every Single Trip
          </span>
        </h1>
        
        <p className="text-white text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          DriveFleet gives you access to an elite, handpicked fleet at transparent prices. 
          Choose your ride, pick your dates, and hit the road.
        </p>

        <div className="flex justify-center items-center gap-4 pt-4">
          <Link
            href="/explore"
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium text-sm px-6 py-3 rounded-md transition-all duration-300 ease-in-out shadow-lg shadow-orange-600/20"
          >
            Book a Car &rarr;
          </Link>
          <a
            href="#how-it-works"
            className="border border-neutral-800 hover:border-neutral-600 text-white font-medium text-sm px-6 py-3 rounded-md bg-neutral-900/30 backdrop-blur-sm transition-all duration-300"
          >
            How It Works
          </a>
        </div>
      </div>

   
      

    </section>
        </div>
    );
};

export default Hero;