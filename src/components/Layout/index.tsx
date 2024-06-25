import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative mt-[102px] px-[50px] pb-[150px] min-h-screen">
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
