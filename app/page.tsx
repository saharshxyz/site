import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import IconBadge from "@/components/IconBadges";

export default function Home() {
  const iconBadges = [
    { icon: FaXTwitter, text: "Twitter", link: "x" },
    { icon: HiOutlineMail, text: "Email", link: "mailto:yeruva@saharsh.xyz" },
    { icon: FaGithub, text: "Github", link: "gh" },
    { icon: FaInstagram, text: "Instagram", link: "ig" },
    { icon: FaLinkedinIn, text: "Linkedin", link: "ln" },
  ];

  return (
    <main>
      <h1>Saharsh Yeruva</h1>
      <p>
        Studying Computational Cognitive Science (Computer Science, Economics, Math and
        Statistics, Linguistics, Philosophy, and Psychology).
      </p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {iconBadges.map((badge, index) => (
          <IconBadge
            key={index}
            icon={badge.icon}
            text={badge.text}
            link={badge.link}
          />
        ))}
      </ul>
    </main>
  );
}
