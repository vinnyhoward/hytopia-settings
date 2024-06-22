import { FC } from "react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="mt-[105px]">{children}</div>;
};

export default Layout;
