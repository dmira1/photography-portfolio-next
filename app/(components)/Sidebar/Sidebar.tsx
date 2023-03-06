import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useMemo } from 'react';

import { AiFillInstagram } from "react-icons/ai";
import { IoIosContact, IoLogoFacebook } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
/* 
  <nav className="flex flex-wrap gap-2 text-xs font-medium">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/portfolio">Portfolio</Link>
  </nav>
*/

const sidebarItems = [
  { id: 0, link: "/", label: "Home", icon: FaHome},
  { id: 1, link: "/about", label: "About", icon: SiAboutdotme},
  { id: 2, link: "/contact", label: "Contact", icon: IoIosContact},
  { id: 3, link: "/portfolio", label: "Portfolio", icon: MdPhotoLibrary},
];

const Sidebar = () => {
  /* Todo:
      1. Handle toggle/hover events
      2. Style the sidebar and its constituents
  */
  return (
    <div>
    </div>
  );
}

export default Sidebar;