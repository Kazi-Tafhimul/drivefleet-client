"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";

import toast from "react-hot-toast";

const AddCarForm = ({ user }) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const carData = Object.fromEntries(formData.entries());

    carData.ownerId = user?.id;
    carData.ownerEmail = user?.email;

    console.log(carData);

    try {
      const { data: tokenData, error } = await authClient.token();

      if (error || !tokenData?.token) {
        toast.error("Authentication token not found. Please login again.");
        return;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${tokenData.token}`,
        },
        body: JSON.stringify(carData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Car successfully added");
        e.target.reset();
      
      } else {
        toast.error(data?.message || "Failed to add car");
      }

      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add car");
    }
  };

  return (
    <Card className="bg-neutral-900 border border-neutral-800 w-full rounded-xl">
      <form onSubmit={onSubmit} className="p-8 md:p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vehicle Name */}
          <div className="md:col-span-2">
            <TextField name="carName" isRequired>
              <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
                Vehicle Model Name
              </Label>
              <Input
                placeholder="Enter your vehicle model name"
                className="bg-neutral-950 text-white rounded-lg mt-1"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </div>

          {/* Vehicle Type (Select) */}
          <div className="flex flex-col">
            <Select
              name="carType"
              isRequired
              className="w-full"
              placeholder="Select vehicle type"
            >
              <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1">
                Vehicle Type
              </Label>
              <Select.Trigger className="bg-neutral-950 border border-neutral-800 text-white rounded-lg">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover className="bg-neutral-900 border border-neutral-800 text-white">
                <ListBox>
                  <ListBox.Item
                    id="Sedan"
                    textValue="Sedan"
                    className="hover:bg-orange-600 rounded"
                  >
                    Sedan
                  </ListBox.Item>
                  <ListBox.Item
                    id="SUV"
                    textValue="SUV"
                    className="hover:bg-orange-600 rounded"
                  >
                    SUV
                  </ListBox.Item>
                  <ListBox.Item
                    id="Electric"
                    textValue="Electric"
                    className="hover:bg-orange-600 rounded"
                  >
                    Electric
                  </ListBox.Item>
                  <ListBox.Item
                    id="Sports"
                    textValue="Sports"
                    className="hover:bg-orange-600 rounded"
                  >
                    Sports
                  </ListBox.Item>
                  <ListBox.Item
                    id="Luxury"
                    textValue="Luxury"
                    className="hover:bg-orange-600 rounded"
                  >
                    Luxury
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Availability Status (Select) */}
          <div className="flex flex-col">
            <Select
              name="availability"
              isRequired
              className="w-full"
              placeholder="Select status"
            >
              <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-1">
                Availability Status
              </Label>
              <Select.Trigger className="bg-neutral-950 border border-neutral-800 text-white rounded-lg">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover className="bg-neutral-900 border border-neutral-800 text-white">
                <ListBox>
                  <ListBox.Item
                    id="Available"
                    textValue="Available"
                    className="hover:bg-orange-600 rounded"
                  >
                    Available
                  </ListBox.Item>
                  <ListBox.Item
                    id="Unavailable"
                    textValue="Unavailable"
                    className="hover:bg-orange-600 rounded"
                  >
                    Unavailable
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Rental Rate */}
          <TextField name="dailyRentPrice" type="number" isRequired>
            <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
              Daily Rental Rate (Taka)
            </Label>
            <Input
              type="number"
              placeholder="150"
              className="bg-neutral-950 text-white rounded-lg mt-1"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Seat Capacity */}
          <TextField name="seatCapacity" type="number" isRequired>
            <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
              Seat Capacity
            </Label>
            <Input
              type="number"
              placeholder="5"
              className="bg-neutral-950 text-white rounded-lg mt-1"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Pickup Location */}
          <TextField name="pickupLocation" isRequired>
            <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
              Pickup Location / City
            </Label>
            <Input
              placeholder="Your location"
              className="bg-neutral-950 text-white rounded-lg mt-1"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Image URL */}
          <div className="md:col-span-2">
            <TextField name="image" isRequired>
              <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
                Direct Image URL
              </Label>
              <Input
                type="url"
                placeholder="URL of your car image"
                className="bg-neutral-950 text-white rounded-lg mt-1"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
                Vehicle Specifications & Description
              </Label>
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
  );
};

export default AddCarForm;
