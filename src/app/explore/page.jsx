import CarCard from "@/components/CarCard";

const ExploreCarsPage = async ({searchParams}) => {
    const resolvedParams = await searchParams;
    const search = resolvedParams?.search || "";
    const type = resolvedParams?.type || "All";
  
    const res = await fetch(`http://localhost:5000/car?search=${search}&type=${type}`);
    const cars = await res.json();

  return (
    <div className="w-full bg-neutral-950 min-h-screen text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-3xl font-extrabold tracking-wider">
              EXPLORE OUR <span className="text-orange-500">FLEET</span>
            </h1>
            <p className="text-sm text-neutral-400 max-w-xl">
              Choose from our highly curated selection of exceptional mechanical performance and premium luxury car rentals.
            </p>
          </div>

          
          <form method="GET" action="/explore" className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <input 
              type="text" 
              name="search"
              defaultValue={search}
              placeholder="Search car by name..." 
              className="bg-neutral-900 border border-neutral-800 text-sm p-2.5 rounded-xl outline-none focus:border-orange-500 text-white w-full sm:w-64 h-11"
            />
            
            <select 
              name="type"
              defaultValue={type}
              className="bg-neutral-900 border border-neutral-800 text-sm p-2.5 rounded-xl outline-none focus:border-orange-500 text-white w-full sm:w-44 h-11 cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Electric">Electric</option>
              <option value="Sports">Sports</option>
              <option value="Luxury">Luxury</option>
            </select>

            <button 
              type="submit" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider px-5 rounded-xl h-11 w-full sm:w-auto transition-colors"
            >
              Apply
            </button>
          </form>
          
        </div>

        
        {cars.length === 0 ? (
          <div className="text-center py-20 text-neutral-500 text-sm border border-dashed border-neutral-900 rounded-2xl">
            No active fleet assets match your selected filter metrics criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ExploreCarsPage;