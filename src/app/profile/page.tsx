import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export default function AboutPage(){
    return(
       
            <section className="flex flex-col justify-around items-center gap-[32px] min-h-full min-w-full px-80">
            <div className="absolute mt-20 inset-0 bg-[url('/Banner.png')] h-[480px] bg-cover bg-center opacity-5 z-0" />

            
                <Avatar className="mt-50 w-80 h-80 border-10  border-[#952D3C]">
                    <AvatarImage src="/Valorant.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-left scroll-m-20 text-6xl font-extrabold tracking-tight text-balance">
                    SELENE
                </h1>
                <div className="px-23">
                    <h2 className="text-left text-4xl font-extrabold pb-5">About me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
              
        
            </section>
            
  
     
    )
}   