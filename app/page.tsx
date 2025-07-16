import IconBadge from "@/components/IconBadge";
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon, } from "lucide-react";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Saharsh Yeruva</h1>
      <p className="mt-1">
        Computational Cognitive Science (Computer Science, Economics, Math and
        Statistics, Linguistics, Philosophy, and Psychology).
      </p>
      <div className="flex gap-2 mt-2.5">
        <IconBadge label="Twitter" link="https://sahar.sh/x" Icon={TwitterIcon}></IconBadge>
        <IconBadge label="GitHub" link="https://sahar.sh/gh" Icon={GithubIcon}></IconBadge>
        <IconBadge label="Linkedin" link="https://sahar.sh/ln" Icon={LinkedinIcon}></IconBadge>
        <IconBadge label="Instagram" link="https://sahar.sh/ig" Icon={InstagramIcon}></IconBadge>
      </div>
    </main>
  );
}
