import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

const Logo = ({ 
  className,
  spanDesign, 
}: { 
  className?: string;
  spanDesign?:string;
 }) => {
  return ( 
  <Link href={"/"} className="inline-flex">
    <h2 
    className={cn(
        "text-2xl text-lightColor font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",
        className)}>
        Dreix<span className={cn("text-shop_light_green group-hover:text-lightColor hoverEffect",
        spanDesign
        )}
        >
          o
          </span>
          </h2>
  </Link>
  );
};
export default Logo;