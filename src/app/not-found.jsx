import Link from "next/link";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        <div className="text-8xl md:text-9xl font-black text-orange-500/20">
          404
        </div>

        <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
          Asset Not Found
        </p>

        <h1 className="mt-3 text-3xl font-black">
          Page not found
        </h1>

        <p className="mt-4 text-sm leading-7 text-neutral-400">
          The page or fleet asset you&apos;re looking for doesn&apos;t exist or may
          have been removed from our system.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/explore"
            className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-colors"
          >
            <FiSearch />
            Browse Fleet
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-colors"
          >
            <FiArrowLeft />
            Back Home
          </Link>
        </div>

        <div className="mt-10 pt-5 border-t border-neutral-800/60">
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
            DriveFleet • Fleet Management System
          </p>
        </div>
      </div>
    </main>
  );
}