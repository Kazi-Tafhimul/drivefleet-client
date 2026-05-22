"use client";
import { FloppyDisk } from "@gravity-ui/icons";
import { Button, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const EditCarForm = ({car,id}) => {
    const router = useRouter();
    const handleUpdate = async (e) =>{
         e.preventDefault();
         const formData = new FormData(e.currentTarget);
         const updatedData = {
         dailyRentPrice: Number(formData.get("dailyRentPrice")),
         carType: formData.get("carType"),
         availability: formData.get("availability"),
         image: formData.get("image"),
         pickupLocation: formData.get("pickupLocation"),
         description: formData.get("description"),

    };
    const res = await fetch(`http://localhost:5000/car/${id}`,{
        method:'PATCH',
        headers:{"content-type" : "application/json"},
        body:JSON.stringify(updatedData),
    });
    if(res){
        toast.success("Data updated successfully")
        router.push('/my-car');
        
    }
    else{
        toast.error("Failed to update the data");
    }

        

        


    }
    return (
        <Form onSubmit={handleUpdate} className="w-full max-w-xl bg-neutral-900 border border-neutral-800 p-6 rounded-xl shadow-2xl">
      <Fieldset>
        <div className="mb-4">
          <Fieldset.Legend className="text-lg font-bold text-orange-500">
            Edit {car.carName || "Vehicle"} Specs
          </Fieldset.Legend>
          <p className="text-[11px] text-neutral-500 mt-0.5">
            Modify active vehicle indexes safely using HeroUI layout contexts.
          </p>
        </div>

        <FieldGroup className="space-y-4">
          
          
          <TextField isRequired name="dailyRentPrice" type="number" defaultValue={car.dailyRentPrice} className="text-white w-full">
            <Label className="text-xs text-neutral-400 font-bold tracking-wider uppercase mb-1 block">Rental Price (৳ / Day)</Label>
            <Input placeholder="3000" className="bg-neutral-950 border border-neutral-800 text-sm text-white w-full rounded-md p-2 outline-none" />
            <FieldError className="text-xs text-red-400 mt-1" />
          </TextField>

          
          <TextField isRequired name="carType" type="text" defaultValue={car.carType || "Sedan"} className="text-white w-full">
            <Label className="text-xs text-neutral-400 font-bold tracking-wider uppercase mb-1 block">Vehicle Type</Label>
            <Input placeholder="Sports, SUV, Sedan" className="bg-neutral-950 border border-neutral-800 text-sm text-white w-full rounded-md p-2 outline-none" />
            <FieldError className="text-xs text-red-400 mt-1" />
          </TextField>

         
          <div className="flex flex-col gap-1">
            <label className="text-xs text-neutral-400 font-bold tracking-wider uppercase">Availability Status</label>
            <select name="availability" defaultValue={car.availability || "available"} className="w-full h-10 bg-neutral-950 p-2 rounded-md border border-neutral-800 text-sm focus:border-orange-500 outline-none text-white cursor-pointer">
              <option value="available" className="bg-neutral-900">Available</option>
              <option value="unavailable" className="bg-neutral-900">Unavailable</option>
            </select>
          </div>

         
          <TextField isRequired name="image" type="url" defaultValue={car.image} className="text-white w-full">
            <Label className="text-xs text-neutral-400 font-bold tracking-wider uppercase mb-1 block">Image Link URL</Label>
            <Input placeholder="https://..." className="bg-neutral-950 border border-neutral-800 text-sm text-white w-full rounded-md p-2 outline-none" />
            <FieldError className="text-xs text-red-400 mt-1" />
          </TextField>

          
          <TextField isRequired name="pickupLocation" type="text" defaultValue={car.pickupLocation} className="text-white w-full">
            <Label className="text-xs text-neutral-400 font-bold tracking-wider uppercase mb-1 block">Pickup Location</Label>
            <Input placeholder="Gulshan, Dhaka" className="bg-neutral-950 border border-neutral-800 text-sm text-white w-full rounded-md p-2 outline-none" />
            <FieldError className="text-xs text-red-400 mt-1" />
          </TextField>

         
          <TextField isRequired name="description" defaultValue={car.description} className="text-white w-full">
            <Label className="text-xs text-neutral-400 font-bold tracking-wider uppercase mb-1 block">Feature Description</Label>
            <TextArea placeholder="Provide highlights..." className="bg-neutral-950 border border-neutral-800 text-sm min-h-[90px] text-white w-full rounded-md p-2 outline-none" />
            <FieldError className="text-xs text-red-400 mt-1" />
          </TextField>

        </FieldGroup>

        <Fieldset.Actions className="flex gap-3 justify-end pt-4 border-t border-neutral-800/60 mt-4">
          <button type="button" onClick={() => router.push("/my-car")} className="text-xs text-neutral-400 hover:text-white px-4 py-2 transition-colors font-semibold">
            Cancel
          </button>
          <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white text-xs px-5 py-2 rounded font-semibold transition-colors flex items-center gap-1.5 h-9">
            <FloppyDisk className="size-4" /> Save Modifications
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
    );
};

export default EditCarForm;