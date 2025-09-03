"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FadeInSection from "@/lib/intersectionObserver";
import { useState } from "react";

export default function Home() {
  const [expanded, setExpanded] = useState(false);


  return (
    <div className="flex flex-col ">
      <main className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start  min-w-full">
        <section className="flex justify-around h-[500px] items-center gap-[32px] min-w-full px-40">
          <div className="absolute mt-20 inset-0 bg-[url('/Banner.png')] h-[480px] bg-cover bg-center opacity-5 z-0" />

          <FadeInSection>
            <div className="text-left">
              <h1 className="text-left scroll-m-20 text-8xl font-extrabold tracking-tight text-balance">
                SELENE
              </h1>
              <h2 className="scroll-m-20 pl-2 text-left text-2xl font-extrabold tracking-tight text-balance text-[#C53448]">
                Player & Manager
              </h2>
              <p className="scroll-m-20 pl-2 text-left text-2xl w-2xl font-light tracking- text-balance">
                Professional E-sports player and experienced manager for Hive
                E-sports.
              </p>
              <Button
                variant="default"
                className="mt-4 ml-2 bg-[#C53448]/70 hover:bg-[#C53448]/40 hover:cursor-pointer"
              >
                View Profile
              </Button>
            </div>
          </FadeInSection>
          <FadeInSection>

          <div className="">
         
               </div>
           </FadeInSection>

        </section>

        <section className=" flex flex-col items-center justify-center gap-7 w-full m-2">
          <FadeInSection>
            <h2 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance ">
              Games Played
            </h2>
          </FadeInSection>

          <FadeInSection>
            <Carousel opts={{ loop: true, align: "start" }}>
              <CarouselContent className="-ml-4">
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="flex flex-col justify-center items-center gap-2">
                    <Image
                      aria-hidden
                      src="/Valorant.png"
                      alt="Valorant"
                      width={250}
                      height={280}
                      className="h-[270px]"
                    />

                    <h1 className="font-bold text-2xl">Valorant</h1>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3  pl-4">
                  <div className="flex flex-col justify-center items-center gap-2">
                    <Image
                      aria-hidden
                      src="/CS.png"
                      alt="Counter Strike"
                      width={250}
                      height={200}
                    />
                    <h1 className="font-bold text-2xl">Counter Strike</h1>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3  pl-4">
                  <div className="flex flex-col justify-center items-center gap-2">
                    <Image
                      aria-hidden
                      src="/Roblox.png"
                      alt="Roblox"
                      width={250}
                      height={200}
                    />
                    <h1 className="font-bold text-2xl">Roblox</h1>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3  pl-4">
                  <div className="flex flex-col justify-center items-center gap-2">
                    <Image
                      aria-hidden
                      src="/Farlight.png"
                      alt="Farlight"
                      width={265}
                      height={200}
                    />
                    <h1 className="font-bold text-2xl">Farlight</h1>
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </FadeInSection>
        </section>

        <section className="flex flex-col items-center justify-center gap-7 w-full m-2">
          <FadeInSection>
            <h2 className="animate-appear scroll-m-20 text-left text-2xl font-extrabold text-balance ">
              ACHIEVEMENTS
            </h2>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-[#952D3C]/10 p-5 flex w-6xl justify-between items-center rounded-3xl animate-appear">
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
          </FadeInSection>

          <FadeInSection>
            <div className="bg-[#952D3C]/10 p-5 flex w-6xl justify-between items-center rounded-3xl animate-appear">
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
          </FadeInSection>
          <FadeInSection>
            <div className="bg-[#952D3C]/10 p-5 flex w-6xl justify-between items-center rounded-3xl animate-appear">
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
          </FadeInSection>
        </section>


        <section className="h-full p-5 min-w-full">
              {/* Wrapper with max height when collapsed */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          expanded ? "max-h-[5000px]" : "max-h-[600px]"
        }`}
      >
          <FadeInSection>
            <h2 className="scroll-m-20 text-center text-2xl font-extrabold text-balance mb-10  animate-appear">
              ORGANIZATION & COMMUNITIES
            </h2>
          </FadeInSection>

          <FadeInSection>
            <div className=" max-w-7xl mx-auto w-full grid grid-cols-6 px-2  animate-appear">
              <div className="col-span-3 w-full h-full py-20">
                <h1 className="font-bold">UNREAL ESPORTS (Team Manager)</h1>
                <p className="text-gray-100  text-32">
                <ul className="list-disc list-inside">
                  <li>Grew a passion for esports by starting as a casual player</li>
                  <li>Able to develop an understanding for esports industry</li>
                  <li>Developed management skills by handling 3 teams</li>
                  <li>In-charge of player recruitment (conducted tryouts and interviews)</li>
                  <li>Planned and hosted in-organization events</li>
                  <li>Responsible for writing community announcements and formal letters for team meetings</li>
                  <li>In-charge of searching for small tournaments</li>
                </ul>
                </p>
              </div>
              {/* Vertical Line */}
              <div className="relative w-full h-full flex justify-center items-center  animate-appear">
                <div className="h-full w-2 bg-[#952D3C]"></div>
                <div className="absolute w-45 px-2 h-15 rounded-full bg-[#952D3C] z-10 ">
                  <h5 className="text-sm font-bold text-white text-center mt-5">
                     March 2021 - Nov 2021

                  </h5>
                </div>
              </div>
              <div className="col-span-2 p-4 ">
                <Image
                  aria-hidden
                  src="/unreal.png"
                  alt="Unreal"
                  width={250}
                  height={100}
                />
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className=" max-w-7xl mx-auto w-full grid grid-cols-6 px-2 animate-appear">
              <div className="col-span-3 w-full h-full py-20">
                <h1 className="font-bold">Venomous Pit Risker Community (Valorant Player / Project Manager)</h1>
                <p className="text-gray-100  text-32">
                <ul className="list-disc list-inside">
                  <li>Became the captain of the community’s all girls Valorant team</li>
                  <li>Played as the team’s sentinel and participated in scrimmages</li>
                  <li>Planned and proposed funded projects for the community</li>
                  <li>In-charge for new member screening </li>
                  <li>Provided weekly community reports</li>
                  <li>Collaborated with Agastopia for community partnership and advertisement</li>
                </ul>
                </p>
              </div>
              {/* Vertical Line */}
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="h-full w-2 bg-[#952D3C]"></div>
                <div className="absolute w-45 px-2 h-15 rounded-full bg-[#952D3C] z-10 ">
                  <h5 className="text-sm font-bold text-white text-center mt-5">
                   Nov 2022 - Jan 2023 
                  </h5>
                </div>
              </div>
              <div className="col-span-2 p-4">
                <Image
                  aria-hidden
                  src="/vpr_logo.png"
                  alt="vpr"
                  width={250}
                  height={100}
                />
              </div>
            </div>
          </FadeInSection>

           <FadeInSection>
            <div className=" max-w-7xl mx-auto w-full grid grid-cols-6 px-2 animate-appear">
              <div className="col-span-3 w-full h-full py-20">
                <h1 className="font-bold">Aretha Esports (Valorant Player)</h1>
                <p className="text-gray-100  text-32">
                <ul className="list-disc list-inside">
                  <li>Co-captain of the organization’s Valorant female team (role: main sentinel)</li>
                  <li>Participates in scrimmages</li>
                  <li>Assists team managers to find scrimmages</li>
                  <li>Participated in FSL’s VCT-GC APAC Series Stage 1: Open 3</li>
                  <li>Participated in a PUG Game of Aureole Esports</li>
                  <li>Collaborated with the team captain for team reports and evaluation</li>
                  <li>Monitored a small mental health project for the team to cope with pressure and stress</li>
                  <li>Worked with both team and coach to organize the team’s schedule</li>
                </ul>
                </p>
              </div>
              {/* Vertical Line */}
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="h-full w-2 bg-[#952D3C]"></div>
                <div className="absolute w-45 px-2 h-15 rounded-full bg-[#952D3C] z-10 ">
                  <h5 className="text-sm font-bold text-white text-center mt-5">
                    April 2023 - May 2024
                  </h5>
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
          </FadeInSection>


            <FadeInSection>
            <div className=" max-w-7xl mx-auto w-full grid grid-cols-6 px-2 animate-appear">
              <div className="col-span-3 w-full h-full py-20">
                <h1 className="font-bold">Haven (Manager)</h1>
                <p className="text-gray-100  text-32">
                <ul className="list-disc list-inside">
                  <li>Co-captain of the organization’s Valorant female team (role: main sentinel)</li>
                  <li>Participates in scrimmages</li>
                  <li>Assists team managers to find scrimmages</li>
                  <li>Participated in FSL’s VCT-GC APAC Series Stage 1: Open 3</li>
                  <li>Participated in a PUG Game of Aureole Esports</li>
                  <li>Collaborated with the team captain for team reports and evaluation</li>
                  <li>Monitored a small mental health project for the team to cope with pressure and stress</li>
                  <li>Worked with both team and coach to organize the team’s schedule</li>
                </ul>
                </p>
              </div>
              {/* Vertical Line */}
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="h-full w-2 bg-[#952D3C]"></div>
                <div className="absolute w-40 px-2 h-15 rounded-full bg-[#952D3C] z-10 ">
                  <h5 className="text-sm font-bold text-white text-center mt-5">
                    July 2025 - Present
                  </h5>
                </div>
              </div>
              <div className="col-span-2 p-4">
                <Image
                  aria-hidden
                  src="/haven.jpg"
                  alt="Harbor Haven"
                  width={250}
                  height={100}
                />
              </div>
            </div>
          </FadeInSection>

            <FadeInSection>
            <div className=" max-w-7xl mx-auto w-full grid grid-cols-6 px-2 animate-appear">
              <div className="col-span-3 w-full h-full py-20">
                <h1 className="font-bold">Hive Community (Manager)</h1>
                <p className="text-gray-100  text-32">
                <ul className="list-disc list-inside">
                  <li>Co-captain of the organization’s Valorant female team (role: main sentinel)</li>
                  <li>Participates in scrimmages</li>
                  <li>Assists team managers to find scrimmages</li>
                  <li>Participated in FSL’s VCT-GC APAC Series Stage 1: Open 3</li>
                  <li>Participated in a PUG Game of Aureole Esports</li>
                  <li>Collaborated with the team captain for team reports and evaluation</li>
                  <li>Monitored a small mental health project for the team to cope with pressure and stress</li>
                  <li>Worked with both team and coach to organize the team’s schedule</li>
                </ul>
                </p>
              </div>
              {/* Vertical Line */}
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="h-full w-2 bg-[#952D3C]"></div>
                <div className="absolute w-40 px-2 h-15 rounded-full bg-[#952D3C] z-10 ">
                  <h5 className="text-sm font-bold text-white text-center mt-5">
                    July 2025 - Present
                  </h5>
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
          </FadeInSection>

          
        {/* Fade overlay (only when collapsed) */}
        {!expanded && (
          <div className="absolute bottom-[-1250px] left-0 w-full h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
          
        )}
          </div>


          
      <FadeInSection>
           {/* Toggle button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-2 bg-[#952D3C] text-white rounded-lg hover:bg-[#7a222f] transition"
        >
          {expanded ? "See Less" : "See More"}
        </button>
      </div>
      </FadeInSection>
        </section>


        <section className="h-full p-5 min-w-full mt-20">
          <FadeInSection>
            <h2 className="scroll-m-20 text-center text-2xl font-extrabold text-balance mb-30  animate-appear">
              VALORANT STATS
            </h2>
          </FadeInSection>


          <div className="grid grid-cols-2 grid-rows-3 gap-3 px-40">

          <FadeInSection>
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-normal">IGN</h1>
                <span className="relative z-10 text-4xl font-black mb-4">Aether#1011</span>
                 
            </div>
          </FadeInSection>


          <FadeInSection>
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-normal">MAIN ROLE</h1>
                <span className="relative z-10 text-4xl font-black mb-4">SENTINEL</span>
                   <Image
                      aria-hidden
                      src="/sentinel.webp"
                      alt="Roblox"
                      width={80}
                      height={80}
                    />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-normal">PEAK RATING</h1>
                <span className="relative z-10 text-4xl font-black">ASCENDANT 2</span>
                 <Image
                      aria-hidden
                      src="/ascendant1.png"
                      alt="Roblox"
                      width={90}
                      height={90}
                    />
            </div>
          </FadeInSection>


          <FadeInSection>

            <div className="flex flex-col items-center my-5">
              <div className="relative mt-2 w-[500px]  flex justify-center items-center text-white  overflow-hidden">
                {/* Content above */}
                <span className="relative z-10 flex flex-col items-center">
                  <h1 className="text-xl font-normal mb-2">AGENTS</h1>

                  <div className="flex gap-4">
                    <Image
                      aria-hidden
                      src="/Sage_icon.png"
                      alt="Roblox"
                      width={100}
                      height={100}
                    />
                    <Image
                      aria-hidden
                      src="/Viper_icon.png"
                      alt="Roblox"
                      width={100}
                      height={100}
                    />
                    <Image
                      aria-hidden
                      src="/Omen_icon.png"
                      alt="Roblox"
                      width={100}
                      height={100}
                    />
                      <Image
                      aria-hidden
                      src="/Cypher_icon.png"
                      alt="Roblox"
                      width={100}
                      height={100}
                    />
                  </div>
                </span>
              </div>
            </div>
                      </FadeInSection>

          </div>


        </section>

        <section className="w-full flex flex-col items-center">
          <FadeInSection>
            <h2 className="scroll-m-20 text-center text-2xl font-extrabold text-balance animate-appear">
              Want to play with me or contact me?
            </h2>
            <h2 className="scroll-m-20 text-center text-2xl font-extrabold text-balance animate-appear">
              Click the button below!
            </h2>
          </FadeInSection>

          <FadeInSection>
            <Button
              variant="default"
              className="w-fit mt-10 ml-2 bg-[#C53448]/70 hover:bg-[#C53448]/40 hover:cursor-pointer"
            >
              Send me a Message!
            </Button>
          </FadeInSection>
        </section>
      </main>
    </div>
  );
}
