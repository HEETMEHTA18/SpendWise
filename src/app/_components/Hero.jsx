import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

function Hero() {
  return (
    <container className='bg-gray-50 flex items-center flex-col'>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Manage your money with AI-Driver Personal <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-purple-900">
                  Finance Advisor
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/dashboard.png`}
            alt="hero"
            height={720}
            width={1100}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </container>
  );
}

export default Hero;
