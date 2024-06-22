"use client";
import { FC } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";

const SettingsHeader: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const renderRoutes = () => {
    return ROUTES.map((item) => {
      const isActive =
        pathname === item.pathname
          ? "border border-[rgba(241,241,241,0.1)]"
          : "bg-[#1d1d20]";
      return (
        <div
          className={`${isActive} min-w-[130px] h-[40px] cursor-pointer bg-transparent 
          flex flex-row justify-center items-center rounded-2xl
          hover:border-[rgba(241,241,241,1)] hover:bg-[rgba(241,241,241,0.1)] 
          transition duration-300 ease-in-out py-[8px] px-[16px] mr-[14px]`}
          onClick={() => router.push(item.pathname)}
          key={item.id}
        >
          <span className="text-[#F1F1F1]">{item.name}</span>
        </div>
      );
    });
  };

  return (
    <div className="w-full z-50 px-[50px] py-[25px] flex justify-between items-center mt-[60px]">
      <div className="flex flex-row justify-between items-center border-t border-b border-[#202121] w-full py-[38px]">
        <div className="text-white font-inter text-lg font-semibold">
          Settings
        </div>
        <div className="flex flex-row">{renderRoutes()}</div>
      </div>
    </div>
  );
};

export default SettingsHeader;
