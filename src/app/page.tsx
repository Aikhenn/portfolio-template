"use client";


import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { start } from "repl";



export default function Home() {



  return (
    <div className="flex flex-col ">
   
      <main className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start  min-w-full">

        <section   className="flex justify-around h-[500px] items-center gap-[32px] min-w-full px-40">
          <div className="absolute mt-20 inset-0 bg-[url('/Banner.png')] h-[480px] bg-cover bg-center opacity-5 z-0" />

          <div className="text-left">
            <h1 className="text-left scroll-m-20 text-8xl font-extrabold tracking-tight text-balance">
              SELENE
            </h1>
               <h2 className="scroll-m-20 pl-2 text-left text-2xl font-extrabold tracking-tight text-balance text-[#C53448]">
               Player & Manager
            </h2>
            <p className="scroll-m-20 pl-2 text-left text-2xl w-2xl font-light tracking- text-balance">
              Professional E-sports player and experienced manager for Hive E-sports.
            </p>
            <Button variant="default" className="mt-4 ml-2 bg-[#C53448]/70 hover:bg-[#C53448]/40 hover:cursor-pointer">View Profile</Button>

          </div>
          <div>
         
          </div>
        
        </section>

        <section className=" flex flex-col items-center justify-center gap-7 w-full m-2">
          <h2 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance ">
            Games Played
          </h2>

          <Carousel opts={{loop:true, align:"start"}}>
            <CarouselContent className="-ml-4">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Image
                  aria-hidden
                  src="/Valorant.png"
                  alt="Valorant"
                  width={250}
                  height={280}
                className="h-[270px]"
                />
                
                </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3  pl-4">  
                <Image
                  aria-hidden
                  src="/CS.png"
                  alt="Counter Strike"
                  width={250}
                  height={250}
                
                /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3  pl-4">     
                <Image
                  aria-hidden
                  src="/Roblox.png"
                  alt="Roblox"
                  width={250}
                  height={200} 
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />

          </Carousel>
         
        </section>

        <section className=" flex flex-col items-center justify-center gap-7 w-full m-2">
          <h2 className="scroll-m-20 text-left text-2xl font-extrabold text-balance ">
            ACHIEVEMENTS
          </h2>
          <div className="bg-[#952D3C]/10 p-5 flex w-6xl justify-between items-center rounded-3xl">

            <div>
              <h5 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance ">
              Valorant Champions Tour
              </h5>
              <h5 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance text-[#952D3C] ">
              Hive Esports
              </h5>
            </div>

            <div>
              <h5 className="scroll-m-20 text-left text-2xl font-extralight  text-balance ">
                2025
              </h5>
            </div>

          </div>

             <div className="bg-[#952D3C]/10 p-5 flex w-6xl justify-between items-center rounded-3xl">

            <div>
              <h5 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance ">
              Valorant Champions Tour
              </h5>
              <h5 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance text-[#952D3C] ">
              Hive Esports
              </h5>
            </div>

            <div>
              <h5 className="scroll-m-20 text-left text-2xl font-extralight  text-balance ">
                2025
              </h5>
            </div>
            
          </div>

             <div className="bg-[#952D3C]/10 p-5 flex w-6xl justify-between items-center rounded-3xl">

            <div>
              <h5 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance ">
              Valorant Champions Tour
              </h5>
              <h5 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance text-[#952D3C] ">
              Hive Esports
              </h5>
            </div>

            <div>
              <h5 className="scroll-m-20 text-left text-2xl font-extralight  text-balance ">
                2025
              </h5>
            </div>
            
          </div>
        </section>

        <section className="h-full p-5 min-w-full">
            <h2 className="scroll-m-20 text-center text-2xl font-extrabold text-balance mb-10">
            COMMUNITIES
          </h2>

          <div className=" max-w-7xl mx-auto w-full grid grid-cols-6 px-2">
             <div className="col-span-3 w-full h-full py-20">
              <h1 className="font-bold">HIVE ESPORTS</h1>
                <p className="text-gray-100  text-32">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>

             </div>
            {/* Vertical Line */}
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="h-full w-2 bg-[#952D3C]"></div>
               <div className="absolute w-20 px-2 h-20 rounded-full bg-[#952D3C] z-10 ">
                
                  <h5 className="text-2xl font-bold text-white text-center mt-5">2025</h5>
                </div>
              </div>
               <div className="col-span-2 p-4">
                <Image
                aria-hidden
                src="/Roblox.png"
                alt="Roblox"
                width={250}
                height={100}
               
              />
            </div>
          </div>
       <div className=" max-w-7xl mx-auto w-full grid grid-cols-6 px-2">
             <div className="col-span-3 w-full h-full py-20">
              <h1 className="font-bold">HIVE ESPORTS</h1>
                <p className="text-gray-100  text-32">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>

             </div>
            {/* Vertical Line */}
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="h-full w-2 bg-[#952D3C]"></div>
               <div className="absolute w-20 px-2 h-20 rounded-full bg-[#952D3C] z-10 ">
                
                  <h5 className="text-2xl font-bold text-white text-center mt-5">2025</h5>
                </div>
              </div>
               <div className="col-span-2 p-4">
                <Image
                aria-hidden
                src="/Roblox.png"
                alt="Roblox"
                width={250}
                height={100}
               
              />
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
           <h2 className="scroll-m-20 text-center text-2xl font-extrabold text-balance ">
             Want to play with me or contact me?
          </h2>
             <h2 className="scroll-m-20 text-center text-2xl font-extrabold text-balance ">
             Click the button below!
          </h2>
           <Button variant="default" className="w-fit mt-10 ml-2 bg-[#C53448]/70 hover:bg-[#C53448]/40 hover:cursor-pointer">Send me a Message!</Button>

        </section>

        

      </main>
    
    </div>
  );
}
