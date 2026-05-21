import CarCard from "@/components/CarCard";

const ExploreCarsPage = async () => {
  
  const res = await fetch("http://localhost:5000/car");
  const cars = await res.json();

  return (
    <div className="w-full bg-neutral-950 min-h-screen text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        
        
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl font-extrabold tracking-wider">
            EXPLORE OUR <span className="text-orange-500">FLEET</span>
          </h1>
          <p className="text-sm text-neutral-400 max-w-xl">
            Choose from our highly curated selection of exceptional mechanical performance and premium luxury car rentals.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExploreCarsPage;