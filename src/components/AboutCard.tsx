import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  description: string;
};

export const AboutCard = ({ icon: Icon, label, description }: Props) => {
  return (
    <div className=" border-1 border-border bg-card py-8 px-12  flex flex-col items-center justify-center gap-2 rounded-lg">
      <div className="p-4 rounded-lg bg-primary/10">
        <Icon size={28} className="text-primary"/>
      </div>
      <h3 className="text-primary text-2xl md:text-3xl font-bold">{label}</h3>
      <p className="text-foreground text-lg">{description}</p>
    </div>
  );
};
