import React from "react";
import { clsx } from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
