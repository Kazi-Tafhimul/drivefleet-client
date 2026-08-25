"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const [imageError, setImageError] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    setIsDropdownOpen(false);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/login";
        },
      },
    });
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-neutral-950 border-b border-neutral-900 p-5 flex justify-between items-center px-8 relative z-50">
      <Link href="/" className="text-white text-2xl font-bold tracking-wider">
        DRIVE<span className="text-orange-500">FLEET</span>
      </Link>

     
      <ul className="text-white flex gap-2 items-center">
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
      </ul>

      
      <div className="flex items-center gap-4">
        {isPending ? (
          <div className="text-neutral-400 text-sm">Loading...</div>
        ) : session ? (
          <div className="relative" ref={dropdownRef}>
         
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full"
            >
              {session.user?.image && !imageError ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="w-10 h-10 rounded-full border border-orange-500 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center border border-orange-500 cursor-pointer hover:bg-orange-700 transition-colors uppercase">
                  {session.user?.name ? session.user.name[0] : "U"}
                </div>
              )}
            </button>

           
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl py-2 text-white">
                <div className="px-4 py-2 border-b border-neutral-800 mb-1">
                  <p className="text-sm font-semibold text-white truncate">
                    {session.user?.name || "User"}
                  </p>
                  <p className="text-xs text-neutral-400 truncate">
                    {session.user?.email}
                  </p>
                </div>

                <Link
                  href="/add-car"
                  onClick={() => setIsDropdownOpen(false)}
                  className="px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 flex items-center gap-2 transition-colors"
                >
                  Add Car
                </Link>

                <Link
                  href="/my-bookings"
                  onClick={() => setIsDropdownOpen(false)}
                  className="px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 flex items-center gap-2 transition-colors"
                >
                  My Bookings
                </Link>

                <Link
                  href="/my-car"
                  onClick={() => setIsDropdownOpen(false)}
                  className="px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 flex items-center gap-2 transition-colors border-b border-neutral-800"
                >
                  My Added Cars
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-neutral-800 flex items-center gap-2 transition-colors mt-1"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-all block"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;