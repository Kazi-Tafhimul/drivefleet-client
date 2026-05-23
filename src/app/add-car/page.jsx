import AddCarForm from '@/components/AddCarForm';
import { auth } from '@/lib/auth';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const AddCarPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),

    });
    if(!session){
        redirect('/login');
    }

    return (
       <div className="bg-neutral-900">
      <div className="p-6 bg-neutral-900 max-w-4xl mx-auto min-h-[85vh] flex flex-col justify-center items-center">
        <div className="w-full space-y-4 mb-6">
          <h1 className="text-2xl font-bold tracking-wider text-white">
            LIST A NEW <span className="text-orange-500">VEHICLE</span>
          </h1>
          <p className="text-sm text-neutral-500">
            Fill out the details below to add your asset to our global premium fleet database.
          </p>
        </div>

        
        <AddCarForm user={session.user} />
      </div>
    </div>
    );
};

export default AddCarPage;