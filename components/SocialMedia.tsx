import { Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './ui/tooltip';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Make sure you have this utility

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLinks = [
    {
        title: "Facebook",
        href: "https://www.facebook.com/andreiiwho",
        icon: <Facebook className="w-5 h-5" />,
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/andrei-almoguerra-62769635a/",
        icon: <Linkedin className="w-5 h-5"/>,
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/andreiiwho/",
        icon: <Instagram className="w-5 h-5"/>,
    },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", 
        className)}>
        {socialLinks.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                href={item?.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect", 
                    iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
            className={cn("bg-white text-darkColor font-semibold", 
                tooltipClassName
            )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;