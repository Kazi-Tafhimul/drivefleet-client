import React from 'react';
import { GiShieldReflect, GiClockwork, GiWallet } from 'react-icons/gi';

export function FeaturesSection() {
  const perks = [
    {
      icon: <GiShieldReflect className="size-6 text-orange-500" />,
      title: "Fully Insured Fleet",
      desc: "Drive with absolute peace of mind. Every luxury vehicle in our database comes with comprehensive premium protection packages."
    },
    {
      icon: <GiClockwork className="size-6 text-orange-500" />,
      title: "24/7 Hub Dispatch",
      desc: "Whether terminal arrival is midnight or dawn, our round-the-clock logistics support ensures your vehicle is dropped off on schedule."
    },
    {
      icon: <GiWallet className="size-6 text-orange-500" />,
      title: "No Hidden Costs",
      desc: "Transparent Taka conversion pricing structure layout. What you calculate on our reservation modal is exactly what you pay."
    }
  ];

  return (
    <div className="w-full bg-neutral-950 py-20 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
            Premium Standards
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider uppercase text-white pt-2">
            THE DRIVEFLEET <span className="text-orange-500">EXPERIENCE</span>
          </h2>
          <p className="text-xs text-neutral-400">
            We engineer rental workflows to provide uncompromised comfort, rapid terminal dispatch, and absolute security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perks.map((perk, idx) => (
            <div key={idx} className="bg-neutral-900/40 border border-neutral-900 p-6 rounded-2xl space-y-4 hover:border-neutral-800 transition-colors duration-300">
              <div className="w-11 h-11 bg-neutral-950 border border-neutral-800 flex items-center justify-center rounded-xl">
                {perk.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white tracking-wide">{perk.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}