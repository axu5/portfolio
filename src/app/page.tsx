import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Headshot1 from "@/../public/headshot1.png";
import { ArrowRight } from "lucide-react";
import { GRID_ITEM_CLASSES } from "./layout";

export default function Home() {
  return (
    <>
      <div
        className={cn(
          GRID_ITEM_CLASSES,
          "col-span-4 row-span-5 flex flex-col justify-around",
        )}
      >
        <div className="flex flex-col gap-y-2">
          <h1 className="text-6xl text-text-primary">Hi, I&apos;m Axu</h1>
          <h2 className="text-5xl text-text-secondary">
            Cybersecurity Enthusiast
          </h2>
        </div>
        <Link
          href="mailto:contact@axu5.com"
          className="group flex flex-row items-center gap-2 text-2xl text-text-cta hover:underline"
        >
          Contact me
          <ArrowRight className="motion-preset-slide-right-sm h-4 w-4 transition-all group-hover:translate-x-2" />
        </Link>
      </div>
      <Image
        src={Headshot1}
        alt="Pic of me"
        placeholder="blur"
        className="motion-preset-focus col-span-4 row-span-10 h-full rounded-lg object-cover object-center"
      />
      <div
        className={cn(GRID_ITEM_CLASSES, "col-span-4 row-span-5 flex flex-col")}
      >
        <span className="text-6xl text-text-primary">Tech stack</span>
      </div>
    </>
  );
}
