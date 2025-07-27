import Image from "next/image"


export default function Footer() {

    return(

  
      <footer className=" row-start-3 flex gap-[24px] flex-wrap  items-center justify-center">
     
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

        )
}