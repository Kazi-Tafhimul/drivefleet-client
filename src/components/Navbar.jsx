import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="bg-neutral-950 border-b border-neutral-900 p-5 flex justify-between items-center px-8">
     
      <div className="text-white text-2xl font-bold tracking-wider">
        DRIVE<span className="text-orange-500">FLEET</span>
      </div>
    
      
      <ul className="text-white flex gap-2">
        <li>
          <Link 
            href="/" 
            className="px-4 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-orange-600 transition-all duration-300 ease-in-out block"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/explore" 
            className="px-4 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-orange-600 transition-all duration-300 ease-in-out block"
          >
            Explore Cars
          </Link>
        </li>
        <li>
          <Link 
            href="/add-car" 
            className="px-4 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-orange-600 transition-all duration-300 ease-in-out block"
          >
            Add Car
          </Link>
        </li>
        <li>
          <Link
            href="/my-bookings" 
            className="px-4 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-orange-600 transition-all duration-300 ease-in-out block"
          >
            My Bookings
          </Link>
          
        </li>
        <li>
            <Link
            href="/my-car"
            className="px-4 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-orange-600 transition-all duration-300 ease-in-out block"
          >
            My Added Cars
          </Link>
        </li>
      </ul>

     
      <div className="w-[100px] hidden md:block"></div>
    </nav>
    );
};

export default Navbar;