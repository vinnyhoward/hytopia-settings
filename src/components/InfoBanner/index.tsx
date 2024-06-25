import { FC } from "react";
import SectionTitle from "@/components/SectionTitle";

interface InfoBar {
  settingName?: string;
  settingOption?: string;
}

const InfoBar: FC<InfoBar> = ({
  settingName = "Graphics",
  settingOption = "Fancy",
}) => {
  return (
    <div
      className="bg-[#15161a] flex flex-col justify-between 
    border-[rgba(241,241,241,0.1)] border-[1px] 
    rounded-2xl overflow-hidden"
    >
      <div className="py-[24px] px-[18px]">
        <SectionTitle title={`${settingName}: ${settingOption}`} />
        <div className="text-[rgba(241,241,241,0.5)] font-inter text-sm font-normal mt-2 min-h-[100px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </div>
      <div
        className="relative bg-cover bg-center w-full h-[350px]"
        style={{ backgroundImage: "url('/info_background.avif')" }}
      ></div>
    </div>
  );
};

export default InfoBar;
