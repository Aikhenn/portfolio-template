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
    <div className="flex flex-col">
      <main className="flex flex-col gap-6 md:gap-[24px] row-start-2 items-center sm:items-start min-w-full">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-around md:h-[500px] items-center gap-6 md:gap-[32px] min-w-full px-4 md:px-40 py-10 md:py-0">
          <div className="absolute mt-10 md:mt-20 inset-0 bg-[url('/Banner.png')] h-[300px] md:h-[480px] bg-cover bg-center opacity-5 z-0" />

          <FadeInSection>
            <div className="text-center md:text-left">
              <h1 className="scroll-m-20 text-6xl md:text-8xl font-extrabold tracking-tight text-balance">
                SELENE
              </h1>
              <h2 className="scroll-m-20 md:pl-2 text-center md:text-left text-xl md:text-2xl font-extrabold tracking-tight text-balance text-[#C53448]">
                Player & Manager
              </h2>
              <p className="scroll-m-20 md:pl-2 text-center md:text-left text-lg md:text-2xl max-w-xl md:w-2xl font-light tracking- text-balance">
                Professional E-sports player and experienced manager for Hive
                E-sports.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  variant="default"
                  className="mt-4 md:ml-2 bg-[#C53448]/70 hover:bg-[#C53448]/40 hover:cursor-pointer"
                >
                  View Profile
                </Button>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="hidden md:block">
              {/* Optional: Add an image here for desktop */}
            </div>
          </FadeInSection>
        </section>

        {/* Games Played Section */}
        <section className="flex flex-col items-center justify-center gap-4 md:gap-7 w-full m-2 px-4">
          <FadeInSection>
            <h2 className="scroll-m-20 text-center md:text-left text-xl md:text-2xl font-extrabold text-balance">
              Games Played
            </h2>
          </FadeInSection>

          <FadeInSection>
            <div className="w-full max-w-md md:max-w-full">
              <Carousel opts={{ loop: true, align: "start" }}>
                <CarouselContent className="-ml-2 md:-ml-4">
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <Image
                        aria-hidden
                        src="/Valorant.png"
                        alt="Valorant"
                        width={200}
                        height={220}
                        className="h-[200px] object-contain"
                      />
                      <h1 className="font-bold text-lg md:text-2xl">Valorant</h1>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <Image
                        aria-hidden
                        src="/CS.png"
                        alt="Counter Strike"
                        width={200}
                        height={160}
                        className="h-[200px] object-contain"
                      />
                      <h1 className="font-bold text-lg md:text-2xl">Counter Strike</h1>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <Image
                        aria-hidden
                        src="/Roblox.png"
                        alt="Roblox"
                        width={200}
                        height={160}
                        className="h-[200px] object-contain"
                      />
                      <h1 className="font-bold text-lg md:text-2xl">Roblox</h1>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <Image
                        aria-hidden
                        src="/Farlight.png"
                        alt="Farlight"
                        width={200}
                        height={160}
                        className="h-[200px] object-contain"
                      />
                      <h1 className="font-bold text-lg md:text-2xl">Farlight</h1>
                    </div>
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </FadeInSection>
        </section>

        {/* Achievements Section */}
        <section className="flex flex-col items-center justify-center gap-4 md:gap-7 w-full m-2 px-4">
          <FadeInSection>
            <h2 className="animate-appear scroll-m-20 text-center md:text-left text-xl md:text-2xl font-extrabold text-balance">
              ACHIEVEMENTS
            </h2>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-[#952D3C]/10 p-4 md:p-5 flex flex-col md:flex-row  md:w-3xl lg:w-6xl justify-between items-center rounded-2xl md:rounded-3xl animate-appear">
              <div className="text-center md:text-left mb-2 md:mb-0">
                <h5 className="scroll-m-20 text-lg md:text-2xl font-extrabold text-balance">
                  Valorant Champions Tour
                </h5>
                <h5 className="scroll-m-20 text-lg md:text-2xl font-extrabold text-balance text-[#952D3C]">
                  Hive Esports
                </h5>
              </div>

              <div>
                <h5 className="scroll-m-20 text-lg md:text-2xl font-extralight text-balance">
                  2025
                </h5>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-[#952D3C]/10 p-4 md:p-5 flex flex-col md:flex-row md:w-3xl lg:w-6xl justify-between items-center rounded-2xl md:rounded-3xl animate-appear">
              <div className="text-center md:text-left mb-2 md:mb-0">
                <h5 className="scroll-m-20 text-lg md:text-2xl font-extrabold text-balance">
                  Valorant Champions Tour
                </h5>
                <h5 className="scroll-m-20 text-lg md:text-2xl font-extrabold text-balance text-[#952D3C]">
                  Hive Esports
                </h5>
              </div>

              <div>
                <h5 className="scroll-m-20 text-lg md:text-2xl font-extralight text-balance">
                  2025
                </h5>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection>
            <div className="bg-[#952D3C]/10 p-4 md:p-5 flex flex-col md:flex-row  md:w-3xl lg:w-6xl justify-between items-center rounded-2xl md:rounded-3xl animate-appear">
              <div className="text-center md:text-left mb-2 md:mb-0">
                <h5 className="scroll-m-20 text-lg md:text-2xl font-extrabold text-balance">
                  Valorant Champions Tour
                </h5>
                <h5 className="scroll-m-20 text-lg md:text-2xl font-extrabold text-balance text-[#952D3C]">
                  Hive Esports
                </h5>
              </div>

              <div>
                <h5 className="scroll-m-20 text-lg md:text-2xl font-extralight text-balance">
                  2025
                </h5>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Teams/Experience Section */}
        <section className="w-full flex flex-col items-center my-4 px-4">
          <FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center">
              <div className="p-2 text-center">
                <Image
                  aria-hidden
                  src="/Roblox.png"
                  alt="Hive"
                  width={200}
                  height={200}
                  className="p-3 transition-transform duration-300 hover:scale-110 mx-auto"
                />
                <h1 className="font-black text-center text-lg md:text-xl">HIVE COMMUNITY</h1>
                <h1 className="font-semibold text-center text-lg md:text-xl text-[#da566a]">Manager</h1>
                <h1 className="font-normal italic text-center text-sm md:text-l">(July 2025 - Present)</h1>
              </div>

              <div className="p-2 text-center">
                <Image
                  aria-hidden
                  src="/haven.jpg"
                  alt="HAVEN"
                  width={200}
                  height={200}
                  className="p-3 transition-transform duration-300 hover:scale-110 mx-auto"
                />
                <h1 className="font-black text-center text-lg md:text-xl">HAVEN</h1>
                <h1 className="font-semibold text-center text-lg md:text-xl text-[#da566a]">Manager</h1>
                <h1 className="font-normal italic text-center text-sm md:text-l">(July 2025 - Present)</h1>
              </div>

              <div className="p-2 text-center">
                <Image
                  aria-hidden
                  src="/Roblox.png"
                  alt="Aretha"
                  width={200}
                  height={200}
                  className="p-3 transition-transform duration-300 hover:scale-110 mx-auto"
                />
                <h1 className="font-black text-center text-lg md:text-xl">ARETHA ESPORTS</h1>
                <h1 className="font-semibold text-center text-lg md:text-xl text-[#da566a]">Valorant Player</h1>
                <h1 className="font-normal italic text-center text-sm md:text-l">(April 2023 - May 2024)</h1>
              </div>

              {/* Center bottom row items by using col-span and flex */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row justify-center gap-4 md:gap-12 mt-4">
                <div className="p-2 text-center">
                  <Image
                    aria-hidden
                    src="/vpr_logo.png"
                    alt="VPR"
                    width={200}
                    height={200}
                    className="p-3 transition-transform duration-300 hover:scale-110 mx-auto"
                  />
                  <h1 className="font-black text-center text-lg md:text-xl">VPR</h1>
                  <h1 className="font-semibold text-center text-lg md:text-xl text-[#da566a]">Valorant Player / Project Manager</h1>
                  <h1 className="font-normal italic text-center text-sm md:text-l">(Nov 2022 - Jan 2023)</h1>
                </div>

                <div className="p-2 text-center">
                  <Image
                    aria-hidden
                    src="/unreal.png"
                    alt="Unreal"
                    width={200}
                    height={200}
                    className="p-3 transition-transform duration-300 hover:scale-110 mx-auto"
                  />
                  <h1 className="font-black text-center text-lg md:text-xl">UNREAL ESPORTS</h1>
                  <h1 className="font-semibold text-center text-lg md:text-xl text-[#da566a]">Team Manager</h1>
                  <h1 className="font-normal italic text-center text-sm md:text-l">(March 2021 - Nov 2021)</h1>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Valorant Stats Section */}
        <section className="p-4 md:p-5 min-w-full mt-10 md:mt-20 mb-10">
          <FadeInSection>
            <h2 className="scroll-m-20 text-center text-2xl md:text-3xl font-extrabold text-balance mb-10 md:mb-20 animate-appear">
              VALORANT STATS
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 grid-rows-4 md:grid-rows-2 px-4 md:px-40">
            <FadeInSection>
              <div className="flex flex-col items-center">
                <h1 className="text-lg md:text-xl font-normal">IGN</h1>
                <span className="relative z-10 text-2xl md:text-4xl font-black mb-2 md:mb-4">Aether#1011</span>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex flex-col items-center">
                <h1 className="text-lg md:text-xl font-normal">MAIN ROLE</h1>
                <span className="relative z-10 text-2xl md:text-4xl font-black mb-2 md:mb-4">SENTINEL</span>
                <Image
                  aria-hidden
                  src="/sentinel.webp"
                  alt="Sentinel"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex flex-col items-center">
                <h1 className="text-lg md:text-xl font-normal">PEAK RATING</h1>
                <span className="relative z-10 text-2xl md:text-4xl font-black">ASCENDANT 2</span>
                <Image
                  aria-hidden
                  src="/ascendant1.png"
                  alt="Ascendant Rank"
                  width={70}
                  height={70}
                  className="w-14 h-14 md:w-20 md:h-20"
                />
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex flex-col items-center">
                <div className="relative mt-2 w-full max-w-xs md:w-[500px] flex justify-center items-center text-white overflow-hidden">
                  <span className="relative z-10 flex flex-col items-center">
                    <h1 className="text-lg md:text-xl font-normal mb-2">AGENTS</h1>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                      <Image
                        aria-hidden
                        src="/Sage_icon.png"
                        alt="Sage"
                        width={70}
                        height={70}
                        className="w-12 h-12 md:w-16 md:h-16"
                      />
                      <Image
                        aria-hidden
                        src="/Viper_icon.png"
                        alt="Viper"
                        width={70}
                        height={70}
                        className="w-12 h-12 md:w-16 md:h-16"
                      />
                      <Image
                        aria-hidden
                        src="/Omen_icon.png"
                        alt="Omen"
                        width={70}
                        height={70}
                        className="w-12 h-12 md:w-16 md:h-16"
                      />
                      <Image
                        aria-hidden
                        src="/Cypher_icon.png"
                        alt="Cypher"
                        width={70}
                        height={70}
                        className="w-12 h-12 md:w-16 md:h-16"
                      />
                    </div>
                  </span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full flex flex-col items-center px-4">
          <FadeInSection>
            <h2 className="scroll-m-20 text-center text-xl md:text-2xl font-extrabold text-balance animate-appear">
              Want to play with me or contact me?
            </h2>
            <h2 className="scroll-m-20 text-center text-xl md:text-2xl font-extrabold text-balance animate-appear">
              Click the button below!
            </h2>
          </FadeInSection>

          <FadeInSection>
            <Button
              variant="default"
              className="w-full max-w-xs md:w-fit mt-6 md:mt-10 bg-[#C53448]/70 hover:bg-[#C53448]/40 hover:cursor-pointer"
            >
              Send me a Message!
            </Button>
          </FadeInSection>
        </section>
      </main>
    </div>
  );
}