import { cn } from "@/lib/utils";
import { GRID_ITEM_CLASSES } from "./layout";
import Image from "next/image";
import Link from "next/link";
import Headshot1 from "@/../public/headshot1.png";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div
        className={cn(
          GRID_ITEM_CLASSES,
          "flex flex-col row-span-5 col-span-4 justify-around"
        )}>
        <div className='flex flex-col gap-y-2'>
          <h1 className='text-text-primary text-6xl'>
            Hi, I&apos;m Axu
          </h1>
          <h2 className='text-text-secondary text-5xl'>
            Cybersecurity Enthusiast
          </h2>
        </div>
        <Link
          href='mailto:contact@axu5.com'
          className='text-text-cta flex flex-row gap-2 text-2xl items-center'>
          Contact me <ArrowRight className='w-4 h-4' />
        </Link>
      </div>
      <Image
        src={Headshot1}
        alt='Pic of me'
        className={cn(
          "object-center object-cover rounded-lg row-span-10 col-span-4"
        )}
      />
      <div
        className={cn(
          GRID_ITEM_CLASSES,
          "flex flex-col row-span-5 col-span-4"
        )}>
        <span className='text-text-primary text-6xl'>Tech stack</span>
      </div>
    </>
  );
}
