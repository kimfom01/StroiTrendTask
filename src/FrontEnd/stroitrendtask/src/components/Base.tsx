import { ReactElement, ReactNode } from "react";
import { Header } from "./Header";

interface Prop {
  children: ReactNode | ReactElement;
}

export const Base = ({ children }: Prop) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
