"use client";
import { Button, FieldError, Label, Modal, Surface, TextArea, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { GiCarKey } from 'react-icons/gi';

const BookingForm = ({carId, carName, dailyRentPrice}) => {
    const router = useRouter();
    const handleBookNow = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const bookingPayload = {
            carId: carId,
            carName: carName,
            userEmail: "testuser@drivefleet.com", 
            driverNeeded: formData.get("driverNeeded"),
            specialNote: formData.get("specialNote") || "No custom user notes appended.",
            totalPrice: Number(dailyRentPrice), 
            bookingDate: new Date().toLocaleDateString("en-CA"), 
    };
    const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload),
      });
      if(res){
        toast.success(`Reservation locked for ${carName}!`);
        router.push("/my-bookings");
        router.refresh();
      }
      else {
        toast.error("Failed to secure reservation.");
      }


    }

    return (
        <Modal>
      
      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-widest py-6 rounded-xl transition-all duration-300 shadow-lg shadow-orange-950/20">
        Book Now
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          
          <Modal.Dialog className="sm:max-w-md bg-neutral-900 border border-neutral-800 text-white rounded-2xl">
            <Modal.CloseTrigger className="text-neutral-400 hover:text-white" />
            
            <Modal.Header>
              <Modal.Icon className="bg-orange-500/10 text-orange-500 border border-orange-500/20">
                <GiCarKey className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-xl font-bold tracking-wide">Secure This Asset</Modal.Heading>
              <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                Confirm your parameters for the <span className="text-orange-500 font-semibold">{carName}</span>. 
                This allocation profile instantly locks your dispatch selection.
              </p>
            </Modal.Header>

            
            <form onSubmit={handleBookNow}>
              <Modal.Body className="p-6">
                <Surface variant="default" className="bg-transparent space-y-5">
                  
                 
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1">
                       Driver Service
                    </label>
                    <select 
                      name="driverNeeded"
                      required
                      className="w-full h-11 bg-neutral-950 p-2.5 rounded-lg border border-neutral-800 text-sm focus:border-orange-500 outline-none text-white cursor-pointer transition-colors"
                    >
                      <option value="No" className="bg-neutral-900">No, I will drive myself</option>
                      <option value="Yes" className="bg-neutral-900">Yes, assign a fleet driver </option>
                    </select>
                  </div>

                  
                  <TextField name="specialNote" className="w-full">
                    <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1 block">
                      Special Requests & Notes
                    </Label>
                    <TextArea
                      placeholder="Specify dropoff targets, hotel terminal hubs, specific flight numbers..." 
                      className="bg-neutral-950 border border-neutral-800 text-sm focus:border-orange-500 text-white w-full rounded-lg p-2.5 outline-none min-h-[90px]"
                    />
                    <FieldError className="text-xs text-red-400 mt-1" />
                  </TextField>

                </Surface>
              </Modal.Body>

              <Modal.Footer className="border-t border-neutral-800/60 p-4 flex justify-end gap-3">
                <Button slot="close" variant="secondary" className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold px-4 rounded-lg">
                  Cancel
                </Button>
                
                
                <Button
                  slot="close" 
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-wider px-5 rounded-lg transition-colors"
                >
                  Book Now
                </Button>
              </Modal.Footer>
            </form>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default BookingForm;