import React from 'react';
import Link from 'next/link';

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Select Vehicle Spec",
      desc: "Browse our premium listings, filter by car type classification parameters, and pick your target asset."
    },
    {
      num: "02",
      title: "Configure Booking Modal",
      desc: "Launch the interactive form sequence, select driver support settings, and lock down your custom transit notes."
    },
    {
      num: "03",
      title: "Instant Verification",
      desc: "Your selection immediately shifts to unavailable across our global matrix and routes instantly to your active reservation grid."
    }
  ];

  return (
    <div className="w-full bg-neutral-950 py-20 px-6 border-t border-neutral-900/60 pb-28">
      <div className="max-w-6xl mx-auto space-y-14">
        
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider uppercase text-white">
            HOW TO SECURE YOUR <span className="text-orange-500">RIDE</span>
          </h2>
          <p className="text-xs text-neutral-400">
            Three simple system milestones separating you from your high-performance driving deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col space-y-4 relative z-10">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-orange-500/20 font-mono tracking-tighter">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pl-1 font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link href="/explore" className="inline-block bg-neutral-900 hover:bg-neutral-850 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl border border-neutral-800 transition-colors shadow-xl">
            Launch Fleet Catalog Now
          </Link>
        </div>

      </div>
    </div>
  );
}