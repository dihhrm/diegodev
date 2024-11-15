"use client";

import { Github, Icon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
type ItemsMenu = {
  id: string | number;
  label: string;
  slug: string;
};
export default function Header() {
  const [menuItems, setMenuItems] = useState<ItemsMenu[]>([
    { id: 1, label: "Home", slug: "/" },
    { id: 2, label: "Posts", slug: "posts" },
    { id: 3, label: "My Projects", slug: "projects" },
  ]);

  return (
    <>
      <div className="flex justify-center bg-slate-700  p-2 shadow-lg text-gray-100 text-xs  h-7 fixed w-full">
        <p>diego-dev::24.10.1994</p>
      </div>

      <div className="h-12 font-bold w-full fixed bg-slate-400 top-7 flex items-center justify-center text-gray-100">
        <ul className="flex items-center gap-3 justify-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                className="hover:text-slate-700 transition ease-in .2s"
                href={item.slug}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <a href="#" className="hover:text-slate-700 transition ease-in .2s">
            <Github size={18} />
          </a>
        </ul>
      </div>
    </>
  );
}
