"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  
  const { data: session, isPending } = authClient.useSession();

  
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/login"; 
        },
      },
    });
  };

  return (
    <nav className="bg-neutral-950 border-b border-neutral-900 p-5 flex justify-between items-center px-8">
      
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

       
        {session && (
          <>
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
          </>
        )}
      </ul>

      
      <div className="flex items-center gap-4">
  {isPending ? (
    <div className="text-neutral-400 text-sm">Loading...</div>
  ) : session ? (
    <div className="flex items-center gap-3">
      {/* ইউজার ছবি থাকলে দেখাবে, না থাকলে ডিফল্ট ফেসবুক স্টাইল Avatar আইকন দেখাবে */}
     {session.user?.image ? (
  <img
    src={session.user.image}
    alt={session.user.name || "User"}
    className="w-9 h-9 rounded-full border border-orange-500 object-cover"
  />
) : (
  <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-orange-500 transition-colors">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  </div>
)}
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
      >
        Logout
      </button>
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