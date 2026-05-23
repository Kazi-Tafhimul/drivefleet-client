import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { BiCalendar, BiCommentDetail } from 'react-icons/bi';
import { GiSteeringWheel } from 'react-icons/gi';
import { TbCoinTaka } from 'react-icons/tb';

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if(!session){
        redirect('/login')
    }
    const loggedInUserEmail = session.user.email;
    
    const res = await fetch(`http://localhost:5000/my-bookings?email=${loggedInUserEmail}`);
    const bookings = await res.json();
    
  
    return (
       <div className="w-full bg-neutral-950 min-h-screen text-white py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto space-y-8">
        
        
        <div>
          <h1 className="text-2xl font-bold tracking-wider uppercase">
            My Active <span className="text-orange-500">Reservations</span>
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Review your scheduled fleet deployments, route allocations, and driver configurations below.
          </p>
        </div>

        
        {bookings.length === 0 ? (
          <div className="border border-dashed border-neutral-800 rounded-xl p-16 text-center text-neutral-500 text-sm">
            You have not reserved any fleet assets yet. 
            <Link href="/explore" className="text-orange-500 hover:underline block mt-3 text-xs font-semibold uppercase tracking-wider">
              Browse Fleet Listings →
            </Link>
          </div>
        ) : (
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.map((booking) => (
              <Card 
                key={booking._id} 
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-neutral-700/50 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-3">
                
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-xl text-white tracking-wide">{booking.carName}</h3>
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider border ${
                      booking.driverNeeded === "Yes" 
                        ? "bg-orange-500/10 text-orange-400 border-orange-500/20" 
                        : "bg-neutral-950 text-neutral-400 border-neutral-800"
                    }`}>
                      <span className="inline-flex items-center gap-1">
                        <GiSteeringWheel/> Driver: {booking.driverNeeded}
                      </span>
                    </span>
                  </div>
                  
                  
                  <div className="text-xs text-neutral-400 flex items-center gap-2">
                    <BiCalendar className="text-neutral-500 text-sm"/>
                    <span>Allocation Date:</span>
                    <Link
                      href={`/explore/${booking.carId}`} 
                      className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-4 decoration-orange-500/20 transition-colors"
                    >
                      {booking.bookingDate}
                    </Link>
                  </div>

                  
                  <div className="bg-neutral-950/60 border border-neutral-800/60 p-3.5 rounded-lg flex gap-2 items-start">
                    <BiCommentDetail className="text-neutral-500 shrink-0 text-sm mt-0.5" />
                    <p className="text-xs text-neutral-400 font-light italic leading-relaxed">
                      {booking.specialNote}
                    </p>
                  </div>
                </div>

                
                <div className="pt-4 border-t border-neutral-800/60 flex justify-between items-center">
                  <span className="text-[10px] uppercase text-neutral-500 font-bold tracking-widest">Grand Total Price</span>
                  <span className="text-xl font-black text-white flex items-center gap-0.5">
                    <TbCoinTaka className="text-2xl text-orange-500" />
                    {booking.totalPrice.toLocaleString()}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}

      </div>
    </div>
    );
};

export default MyBookingsPage;