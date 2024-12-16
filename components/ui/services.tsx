import React from "react";

import Image from "next/image";
import Link from "next/link";
import WordFadeIn from "../magicui/word-fade-in";

const Services = ({ content }: any) => {
  return (
    <section
    className="
      overflow-clip 
inset-0 
-z-10 h-full w-full bg-[#fafafa]
bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
 bg-[size:14px_24px]"
  >
      <div className="flex items-center justify-center relative">
        <WordFadeIn
          className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  "
          words="Design & Code That Helps Your Business Grow"
        />
      </div>
      <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
        Have a look at some of our recent projects.
      </p>

    <div className="
     my-10 md:py-20 bg-accent rounded-[45px] p-[50px] md:p-[60px] relative mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">
          {content.headline}
        </p>

        <p className="my-10 text-xl text-gray-500">
         {content.description}
        </p>

        <Link
          href="/meeting"
          className="py-3 
            px-10
        
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
        >
          {content.callToAction.text}
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </div>
    </section>
  );
}

export default Services;
