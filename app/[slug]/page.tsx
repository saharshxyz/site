import { redirect } from "next/navigation";

const urlMap: Record<string, string> = {
  email: "mailto:yeruva@saharsh.xyz",
  pp: "https://www.paypal.com/paypalme/saharshy",
  elon: "https://youtu.be/-BMgkHvdXm4",
  venmo: "https://www.venmo.com/saharshxyz",
  music: "https://www.last.fm/user/saharshy29",
  fb: "https://www.facebook.com/saharshxyz",
  linkedin: "https://www.linkedin.com/in/saharshxyz/",
  ln: "https://www.linkedin.com/in/saharshxyz/",
  chess: "https://www.chess.com/member/saharshxyz",
  github: "https://www.github.com/saharshxyz",
  gh: "https://www.github.com/saharshxyz",
  instagram: "https://www.instagram.com/saharshxyz",
  ig: "https://www.instagram.com/saharshxyz",
  twitter: "https://www.twitter.com/saharshxyz",
  x: "https://www.x.com/saharshxyz",
};

export default function SlugPage({ params }: { params: { slug: string } }) {
  const destination = urlMap[params.slug];

  if (destination) {
    redirect(destination);
  }
}

export function generateStaticParams() {
  return Object.keys(urlMap).map((slug) => ({ slug }));
}
