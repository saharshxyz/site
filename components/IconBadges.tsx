import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

interface IconBadgeProps {
  icon: IconType;
  text: string;
  link: string;
}

const IconBadge: React.FC<IconBadgeProps> = ({ icon: Icon, text, link }) => {
  const isInternalLink = !link.includes(":") && !link.startsWith("mailto");

  const LinkComponent = isInternalLink ? Link : "a";
  const linkProps = isInternalLink
    ? { href: `/${link}` }
    : { href: link, target: "_blank", rel: "noopener noreferrer" };

  return (
    <li>
      <LinkComponent {...linkProps} className="group">
        <div className="inline-flex items-center justify-center rounded-full border border-slate-950 px-2 text-base transition-colors duration-200 dark:border-slate-100">
          <Icon />
          <span className="ml-1">{text}</span>
        </div>
      </LinkComponent>
    </li>
  );
};

export default IconBadge;
