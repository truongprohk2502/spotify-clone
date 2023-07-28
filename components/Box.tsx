import { type ReactNode, type FC } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  className?: string;
  children: ReactNode;
}

const Box: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={twMerge(" bg-neutral-900 rounded-lg h-fit w-full", className)}
    >
      {children}
    </div>
  );
};

export default Box;
