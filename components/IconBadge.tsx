import type { LucideIcon } from "lucide-react";

export default function IconBadge({
  Icon,
  label,
  link
}: {
  Icon: LucideIcon;
  label: string;
  link: string
}) {
  return (
    <div className="ring-1 rounded-full px-2">
      <a href={link} target="_blank" className="flex items-center gap-2">
        <Icon className="h-4.25" />
        <p>{label}</p>
      </a>
    </div>
  );
}
