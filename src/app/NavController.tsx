"use client";

import { cn } from "@/lib/utils";
import {
  BookUser,
  BriefcaseBusiness,
  Code,
  Cpu,
  GraduationCap,
  Home,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export function NavController() {
  return (
    <div className="flex flex-col gap-y-2">
      <NavItem name="Home" path="/">
        <Home />
      </NavItem>
      <NavItem name="Services" path="/services">
        <Cpu />
      </NavItem>
      <NavItem name="About me" path="/about">
        <User />
      </NavItem>
      <NavItem name="Experience" path="/experience">
        <BriefcaseBusiness />
      </NavItem>
      <NavItem name="Education" path="/education">
        <GraduationCap />
      </NavItem>
      <NavItem name="Projects" path="/projects">
        <Code />
      </NavItem>
      <NavItem name="Contact" path="/contact">
        <BookUser />
      </NavItem>
    </div>
  );
}

type NavItemProps = {
  name: string;
  path: string;
};

function NavItem({ name, path, children }: NavItemProps & PropsWithChildren) {
  const pathname = usePathname();
  const pathToMatch = path.replace(/\//g, "");
  const finalPathname = pathname.split("/").at(-1);
  const isCurrentPath = finalPathname === pathToMatch;

  return (
    <>
      <Link
        href={path}
        className={cn(
          "group flex flex-row gap-x-4 rounded-full px-5 py-3 font-black text-text-secondary transition-all hover:text-text-primary",
          {
            "hover:backdrop-invert": !isCurrentPath,
            "backdrop-invert": isCurrentPath,
          },
        )}
      >
        <span
          className={cn("group-hover:invert", {
            "group-hover:invert": !isCurrentPath,
            invert: isCurrentPath,
          })}
        >
          {children}
        </span>
        <span
          className={cn("group-hover:invert", {
            "group-hover:invert": !isCurrentPath,
            invert: isCurrentPath,
          })}
        >
          {name}
        </span>
      </Link>
    </>
  );
}
