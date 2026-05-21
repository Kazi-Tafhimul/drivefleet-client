"use client";

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from "@heroui/react";
import toast from "react-hot-toast";

const AddCarPage = () => {
    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    
    const carData = Object.fromEntries(formData.entries());
    console.log(carData);
   const res = await fetch("http://localhost:5000/car", {
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(carData)
    })
    const data = await res.json();
    console.log(data);
    
    
    // carData.availability = "available";
    // carData.bookingCount = 0;
    // carData.ownerEmail = "user@example.com"; 
    // carData.createdAt = new Date().toISOString();

    // try {
    //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(carData),
    //   });

    //   const data = await res.json();

    //   if (res.ok) {
    //     toast.success("Vehicle listed successfully in DriveFleet!");
    //     e.currentTarget.reset(); 
    //   } else {
    //     throw new Error(data.message || "Failed to list the vehicle");
    //   }
    // } catch (error) {
    //   toast.error(error.message);
    // }
  };

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

      <Card className="bg-neutral-900 border border-neutral-800 w-full rounded-xl">
        <form onSubmit={onSubmit} className="p-8 md:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
           
            <div className="md:col-span-2">
              <TextField name="carName" isRequired>
                <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Vehicle Model Name</Label>
                <Input placeholder="Enter your vehicle model name" className="bg-neutral-950 text-white rounded-lg mt-1" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            
            <div className="flex flex-col">
              <Select
                name="carType"
                isRequired
                className="w-full"
                placeholder="Select vehicle type"
              >
                <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1">Vehicle Type</Label>
                <Select.Trigger className="bg-neutral-950 border border-neutral-800 text-white rounded-lg">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="bg-neutral-900 border border-neutral-800 text-white">
                  <ListBox>
                    <ListBox.Item id="Sedan" textValue="Sedan" className="hover:bg-orange-600 rounded">Sedan</ListBox.Item>
                    <ListBox.Item id="SUV" textValue="SUV" className="hover:bg-orange-600 rounded">SUV</ListBox.Item>
                    <ListBox.Item id="Electric" textValue="Electric" className="hover:bg-orange-600 rounded">Electric</ListBox.Item>
                    <ListBox.Item id="Sports" textValue="Sports" className="hover:bg-orange-600 rounded">Sports</ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury" className="hover:bg-orange-600 rounded">Luxury</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

           
            <TextField name="dailyRentPrice" type="number" isRequired>
              <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Daily Rental Rate (Taka)</Label>
              <Input type="number" placeholder="150" className="bg-neutral-950 text-white rounded-lg mt-1" />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

          
            <TextField name="seatCapacity" type="number" isRequired>
              <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Seat Capacity</Label>
              <Input type="number" placeholder="5" className="bg-neutral-950 text-white rounded-lg mt-1" />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            
            <TextField name="pickupLocation" isRequired>
              <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Pickup Location / City</Label>
              <Input placeholder="Your location" className="bg-neutral-950 text-white rounded-lg mt-1" />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            
            <div className="md:col-span-2">
              <TextField name="image" isRequired>
                <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Direct Image URL</Label>
                <Input type="url" placeholder="URL of your car image" className="bg-neutral-950 text-white rounded-lg mt-1" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

           
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Vehicle Specifications & Description</Label>
                <TextArea
                  placeholder="Provide premium performance details, features, or rental guidelines..."
                  className="bg-neutral-950 text-white rounded-lg mt-1 min-h-[100px]"
                />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>
          </div>

          
          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm py-4 rounded-lg transition-colors duration-300"
          >
            Deploy Vehicle to Fleet
          </Button>
        </form>
      </Card>
    </div>
    </div>
   
  )
    
};

export default AddCarPage;