"use client";


import { useState } from "react";
import FadeInSection from "@/lib/intersectionObserver";
import Image from "next/image";

export default function AboutPage() {


  return (
  <section className="h-full p-5 min-w-full">
              {/* Wrapper with max height when collapsed */}
   
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

          
    


        </section>

  );
}
