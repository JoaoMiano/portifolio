import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

type Props = {
  icon: LucideIcon | IconType;
  label: string;
  description: string;
  link?: string
};

export const AboutCard = ({ icon: Icon, label, description, link }: Props) => {
  const cardContent: ReactNode = (
    <div className=" border-1 border-border bg-card py-8 px-12  flex flex-col items-center justify-center gap-2 rounded-lg">
      <div className="p-4 rounded-lg bg-primary/10">
        <Icon size={28} className="text-primary" />
      </div>
      <h3 className="text-primary text-2xl md:text-3xl font-bold">{label}</h3>
      <p className="text-foreground text-md text-center break-words max-w-full">
        {description}
      </p>

    </div>
  )
  return link ? (
    <a href={link} target="_blank" className="hover:scale-105 transition-all duration-150">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};
