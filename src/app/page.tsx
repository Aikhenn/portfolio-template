"use client";


import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



export default function Home() {

  
const pathname = usePathname();

const navLinks = [
  { label: "Home", href: "/dod" },
  { label: "Profile", href: "/docs" },
  { label: "Games", href: "/game" },
  { label: "Tracker", href: "/game" },
];

  return (
    <div className="border-2 border-amber-50 font-sans bg-[#201B1F] text-white grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 ">
      <header className="">
         <NavigationMenu>
      <NavigationMenuList className="gap-6">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <NavigationMenuItem key={href}>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  className="relative px-2 py-1 text-white group"
                  active={isActive}
                >
                  <span className="relative z-10">{label}</span>
                
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
      </header>
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
          <div className="flex gap-[128px] justify-around">
            <div className="flex flex-col items-center gap-4">
              <Image
                aria-hidden
                src="/Valorant.png"
                alt="Valorant"
                width={250}
                height={280}
               className="h-[270px]"
              />
                <h5 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance ">
              Valorant
              </h5>
            </div>
           <div className="flex flex-col items-center gap-4">
              <Image
                aria-hidden
                src="/CS.png"
                alt="Counter Strike"
                width={250}
                height={250}
               
              />
                <h5 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance ">
              Counter Strike
              </h5>
            </div>

              <div className="flex flex-col items-center gap-4">
              <Image
                aria-hidden
                src="/Roblox.png"
                alt="Roblox"
                width={250}
                height={200}
               
              />
                <h5 className="scroll-m-20 text-left text-2xl font-extrabold  text-balance ">
               Roblox
              </h5>
            </div>

          </div>
        </section>

        <section className=" flex flex-col items-center justify-center gap-7 w-full m-2">
          <h2 className="scroll-m-20 text-left text-2xl font-extrabold text-balance ">
            Achievements
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
     
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/fb-icon.svg"
            alt="facebook icon"
            width={20}
            height={20}
            className="w-4 h-4 invert sepia saturate-100 hue-rotate-[180deg]"

          />
          Facebook
        </a>
           <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/ig-icon.svg"
            alt="Instagram icon"
            width={20}
            height={20}
            className="w-4 h-4 invert sepia saturate-100 hue-rotate-[180deg]"
          />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/tiktok-icon.svg"
            alt="tiktok icon"
             width={20}
            height={20}
            className="w-4 h-4 invert sepia saturate-100 hue-rotate-[180deg]"
          />
          Tiktok
        </a>
      </footer>
    </div>
  );
}
