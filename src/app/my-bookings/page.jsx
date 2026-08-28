import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import BookingCard from "@/components/BookingCard";

const MyBookingsPage = async () => {
  const reqHeaders = await headers();

  const session = await auth.api.getSession({
    headers: reqHeaders,
  });

  if (!session) {
    redirect("/login");
  }

  const loggedInUserEmail = session.user.email;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings?email=${loggedInUserEmail}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  const bookings = Array.isArray(data) ? data : [];

  return (
    <div className="w-full bg-neutral-950 min-h-screen text-white py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto space-y-8">

       
        <div>
          <h1 className="text-2xl font-bold tracking-wider uppercase">
            My Active{" "}
            <span className="text-orange-500">Reservations</span>
          </h1>

          <p className="text-xs text-neutral-500 mt-1">
            Review your scheduled fleet deployments, route allocations, and
            driver configurations below.
          </p>
        </div>

      
        {bookings.length === 0 ? (
          <div className="border border-dashed border-neutral-800 rounded-xl p-16 text-center text-neutral-500 text-sm">
            You have not reserved any fleet assets yet.

            <Link
              href="/explore"
              className="text-orange-500 hover:underline block mt-3 text-xs font-semibold uppercase tracking-wider"
            >
              Browse Fleet Listings →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MyBookingsPage;