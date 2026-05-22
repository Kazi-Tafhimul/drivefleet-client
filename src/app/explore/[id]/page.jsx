import BookingForm from '@/components/BookingForm';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa';
import { GiCarSeat } from 'react-icons/gi';
import { TbCoinTaka } from 'react-icons/tb';

const CarDetailsPage = async ({params}) => {
    const {id} = await params;
    console.log(id);
    const res = await fetch(`http://localhost:5000/car/${id}`);
    const car = await res.json();
    console.log(car)
    return (
       <div className="w-full bg-neutral-950 min-h-screen text-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <Link href="/explore" className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-orange-500 transition-colors uppercase tracking-wider font-semibold">
          <FaArrowLeft/> Back to Fleet Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
         
          <div className="lg:col-span-7 relative w-full h-[50vh] lg:h-[60vh] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={car.image || "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200"}
              alt={car.carName}
              fill
              priority
              className="object-cover"
            />
          </div>

          
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-orange-500 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-md">
                {car.carType}
              </span>
              <h1 className="text-3xl font-extrabold tracking-wide text-white pt-2">
                {car.carName}
              </h1>
              <p className="text-sm text-neutral-400 flex items-center gap-1.5 pt-1">
                <CiLocationOn/> Pickup Location: <span className="text-white font-medium">{car.pickupLocation}</span>
              </p>
            </div>

            <Card className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-row justify-between items-center">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Daily Rental Rate</p>
                <p className="flex items-center text-2xl font-black text-white mt-1"><TbCoinTaka/>{car.dailyRentPrice}<span className="text-xs text-neutral-400 font-normal"> / day</span></p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Capacity</p>
                <p className="flex gap-2 text-base font-bold text-neutral-300 mt-1"><GiCarSeat/>{car.seatCapacity} Seats</p>
              </div>
            </Card>

            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Vehicle Profile & Specifications</h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                {car.description || "No custom manufacturer narrative specifications provided for this asset selection package."}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold bg-neutral-900/50 border border-neutral-800/60 p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${car.availability === "available" ? "bg-emerald-500 shadow-[0_0_10px_#10b981]" : "bg-red-500"}`} />
                <span className="text-neutral-300 capitalize">Status: {car.availability}</span>
              </div>
              <span className="text-neutral-700">|</span>
              <div className="text-neutral-400">
                Logged Bookings: <span className="text-orange-500 font-bold">{car.bookingCount || 0} times</span>
              </div>
            </div>

            
           {car.availability !== "unavailable" ? (
            <BookingForm 
                carId={car._id} 
                carName={car.carName} 
                dailyRentPrice={car.dailyRentPrice} 
            />
) : (
            <div className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center text-xs text-neutral-500 font-bold uppercase tracking-widest py-4">
                Vehicle Currently Reserved
            </div>
)}
          

          </div>

        </div>
      </div>
    </div>
    );
};

export default CarDetailsPage;