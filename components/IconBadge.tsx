import type { LucideIcon } from "lucide-react";

export default function IconBadge({
  Icon,
  label,
  link,
}: {
  Icon: LucideIcon;
  label: string;
  link: string;
}) {
  return (
    <div className="rounded-full px-2 ring-1">
      <a href={link} target="_blank" className="flex items-center gap-2">
        <Icon className="h-4.25" />
        <p>{label}</p>
      </a>
    </div>
  );
}
