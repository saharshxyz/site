import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import IconBadge from "@/components/IconBadges";

export default function Home() {
  const iconBadges = [
    { icon: FaXTwitter, text: "Twitter", href: "https://x.com/saharshxyz" },
    { icon: HiOutlineMail, text: "Email", href: "mailto:yeruva@saharsh.xyz" },
    { icon: FaGithub, text: "Github", href: "https://github.com/saharshxyz" },
    {
      icon: FaInstagram,
      text: "Instagram",
      href: "https://instagram.com/saharshxyz",
    },
    {
      icon: FaLinkedinIn,
      text: "Linkedin",
      href: "https://www.linkedin.com/in/saharshxyz/",
    },
  ];

  return (
    <main>
      <h1>Saharsh Yeruva</h1>
      <p>
        Student at UMass Amherst studying Computer Science, Economics, Math and
        Statistics, Linguistics, Philosophy, and Psychology.
      </p>
      <p>Prev: Chewy</p>
      <p>Would love to talk &mdash; please reach out.</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {iconBadges.map((badge, index) => (
          <IconBadge
            key={index}
            icon={badge.icon}
            text={badge.text}
            href={badge.href}
          />
        ))}
      </ul>
    </main>
  );
}
