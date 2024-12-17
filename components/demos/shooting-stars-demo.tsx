import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Excellence",
    description:
      "Striving for the highest standards in every service we provide.",
  },
  {
    icon: "/icons/design.svg",
    title: "Innovation",
    description:
      "Embracing new ideas to deliver effective solutions.",
  },
  // {
  //   icon: "/icons/scalable.svg",
  //   title: "Scalability + Maintenance ",
  //   description: "We offer maintenance and scalability for all websites.",
  // },
  {
    icon: "/icons/safe.svg",
    title: "Integrity",
    description:
      "Building trust through transparency and honest communication.",
  },
  // {
  //   icon: "/icons/analytics.svg",
  //   title: "Analytics Tracking",
  //   description: "Track your progress with our built in analytics",
  // },

  // {
  //   icon: "/icons/flexible.svg",
  //   title: "Dynamic Websites",
  //   description: "We build dynamic solutions that are easy to manage.",
  // },
  {
    icon: "/icons/support.svg",
    title: "Customer Focus",
    description:
      "Putting our clients’ needs and aspirations at the forefront of our services.",
  },
  {
    icon: "/icons/team.svg",
    title: "Team of Experts",
    description: "A team of experts ready to help you, at all times.",
  },
  {
    icon: "/icons/money.svg",
    title: "Affordable Pricing",
    description: "Affordable pricing for all our clients.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Our guarantees to you.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
        To be a reliable consultancy partner, enhancing our clients’ growth and success through customized, solution-oriented services.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
