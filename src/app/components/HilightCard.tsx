import { ReactNode } from "react";

export const HilightCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#1E1E1E] p-8 rounded-2xl flex flex-col justify-between gap-4">
      <h2 className="text-3xl font-bold">Today’s Highlight</h2>
      <div className="flex flex-row gap-4">{children}</div>
    </div>
  );
};
