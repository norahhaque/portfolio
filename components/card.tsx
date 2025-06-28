import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

export default function Card({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={twMerge("bg-[#243522] rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6", className)}>

      <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: "url('/grain.jpg')", }}></div>
      {children}
    </div>
  );
}


