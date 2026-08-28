"use client";

import { Button } from "@heroui/react";
import { useEffect } from "react";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        {/* Error Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20">
          <FiAlertTriangle className="text-4xl text-orange-500" />
        </div>

        {/* Error Code */}
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-3">
          System Error
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-neutral-400">
          We couldn&apos;t complete your request right now. Please try again.
          If the problem continues, return to the fleet dashboard and try
          again later.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onPress={() => reset()}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-5 rounded-lg"
          >
            <FiRefreshCw className="mr-2" />
            Try Again
          </Button>

          <Button
            onPress={() => (window.location.href = "/")}
            variant="secondary"
            className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-bold text-xs uppercase tracking-wider px-6 py-5 rounded-lg"
          >
            Back to Home
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-5 border-t border-neutral-800/60">
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
            DriveFleet • Fleet Management System
          </p>
        </div>
      </div>
    </main>
  );
}