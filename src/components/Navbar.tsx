"use client";
import React, { useState } from "react";
import {  Menu, MenuItem} from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  

  // Function to handle navigation


  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Link href="#home" scroll={true}>
      
      <Menu setActive={setActive} websiteName="Contentfloww">
        <Link href="#information" scroll={true}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
          ></MenuItem>
        </Link>
        <Link href="#benefits" scroll={true}  >
        <MenuItem
          setActive={setActive}
          active={active}
          item="Benefits"
        ></MenuItem>
        </Link>
       <Link href= "#process" scroll={true}>
       <MenuItem
          setActive={setActive}
          active={active}
          item="Process"
        ></MenuItem>
       </Link>
       <Link href="#testimonials" scroll={true}>
       <MenuItem
          setActive={setActive}
          active={active}
          item="Testimonials"
        ></MenuItem>
       </Link>
      
      </Menu>
      </Link>

    </div>
  );
}
