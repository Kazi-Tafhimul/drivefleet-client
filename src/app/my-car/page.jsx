import DeleteButton from '@/components/DeleteButton';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const MyCarsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if(!session){
        redirect("/login");
    }
    const loggedInUserEmail = session.user.email;
    
    const res = await fetch(`http://localhost:5000/car?email=${loggedInUserEmail}`);
    const cars = await res.json();

    return (
       <div className="w-full bg-neutral-950 min-h-screen text-white p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My <span className="text-orange-500">Added Cars</span></h1>
          <p className="text-xs text-neutral-400 mt-1">Manage your active vehicle inventory listings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car._id} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden p-4 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="relative w-full h-40 rounded-lg overflow-hidden bg-neutral-950">
                  <Image src={car.image} alt={car.carName} fill className="object-cover" />
                </div>
                <div>
                  <span className="text-[10px] bg-orange-500/10 text-orange-400 font-bold px-2 py-0.5 rounded uppercase">
                    {car.carType}
                  </span>
                  <h3 className="font-bold text-lg text-white mt-1">{car.carName}</h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 mt-1">{car.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link href={`/my-car/edit/${car._id}`} className="w-full">
                  <button className="w-full bg-neutral-800 border border-neutral-700 text-xs px-4 py-2 rounded-md hover:bg-neutral-700 font-semibold h-9">
                    Update Specs
                  </button>
                </Link>
               
                <DeleteButton _id={car._id} carName={car.carName} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default MyCarsPage;