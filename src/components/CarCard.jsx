import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { GiCarSeat } from "react-icons/gi";


const CarCard = ({ car }) => {
  const { _id, carName, carType, dailyRentPrice, image, seatCapacity, pickupLocation, description } = car;

  return (
    <Card className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 hover:shadow-xl transition-all duration-300 w-full group">
      
      
      <div className="relative w-full h-52 bg-neutral-950 overflow-hidden">
        <Image
          src={image || "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600"}
          alt={carName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
      
        <div className="absolute inset-x-3 top-3 flex justify-between items-center z-10">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest bg-neutral-950/80 backdrop-blur-md border border-neutral-800/60 px-2.5 py-1 rounded-md">
            {carType}
          </span>
          <div className="bg-neutral-950/80 backdrop-blur-md border border-neutral-800/60 px-3 py-1 rounded-md text-xs font-bold text-white">
            <span className="text-orange-500 font-extrabold text-sm">৳{dailyRentPrice}</span>
            <span className="text-neutral-400 font-normal text-[10px]">/day</span>
          </div>
        </div>
      </div>

    
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold tracking-wide text-white group-hover:text-orange-500 transition-colors duration-200 line-clamp-1">
            {carName}
          </h3>
          <p className="text-xs text-neutral-400 font-light">
            {description || "Experience top-tier luxury performance and smooth handling setups natively configured for premium travel expectations."}
          </p>
        </div>

        
        <div className="flex justify-between items-center border-t border-b border-neutral-800/80 py-2.5 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <GiCarSeat/>
            <span>{seatCapacity || 5} Seats</span>
          </div>
          <span className="text-neutral-800">|</span>
          <div className="flex items-center gap-1.5 max-w-[60%]">
            
            <span className="truncate">{pickupLocation}</span>
          </div>
        </div>

        
        <Link href={`/explore/${_id}`} className="w-full block pt-1">
          <Button className="w-full bg-neutral-950 border border-neutral-800 text-white font-semibold text-xs uppercase tracking-wider py-5 rounded-xl hover:bg-orange-600 hover:border-orange-600 transition-all duration-300">
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default CarCard;