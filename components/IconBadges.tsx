import React from "react";
import { IconType } from "react-icons";

interface IconBadgeProps {
  icon: IconType;
  text: string;
  href: string;
}

const IconBadge: React.FC<IconBadgeProps> = ({ icon: Icon, text, href }) => {
  return (
    <a href={href} className="group">
      <div className="inline-flex items-center justify-center rounded-full border-2 border-slate-950 px-2 text-base transition-colors duration-200 dark:border-slate-100">
        <Icon />
        <span className="ml-1">{text}</span>
      </div>
    </a>
  );
};

export default IconBadge;
