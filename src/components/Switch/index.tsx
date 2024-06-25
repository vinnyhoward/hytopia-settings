"use client";
import { FC } from "react";
import Image from "next/image";
import RightCaretIcon from "@/assets/svg/caret-right.svg";
import LeftCaretIcon from "@/assets/svg/caret-left.svg";
import SectionTitle from "@/components/SectionTitle";

interface SwitchProps {
  setting: string | number;
  setIncrement: (value: any) => any;
  setDecrement: (value: any) => any;
  disableBackground?: boolean;
}

const Switch: FC<SwitchProps> = ({
  setting,
  setIncrement,
  setDecrement,
  disableBackground,
}) => {
  const styles = disableBackground ? "bg-[#000]" : "bg-[#F1F1F1]";
  const textStyles = disableBackground ? "text-[rgba(241,241,241,0.5)]" : "";
  console.log(setting);
  return (
    <div className="flex flex-row">
      <div
        onClick={setDecrement}
        className="w-[50px] h-[50px] bg-[#24292d] flex justify-center items-center rounded-xl
        cursor-pointer"
      >
        <Image src={LeftCaretIcon} alt="left caret icon" />
      </div>
      <div
        className={`rounded-xl ${styles} w-[300px] flex justify-center items-center text-black mx-[10px]`}
      >
        <SectionTitle
          title={setting}
          dark={!disableBackground}
          styles={textStyles}
        />
      </div>
      <div
        onClick={setIncrement}
        className="w-[50px] h-[50px] bg-[#24292d] flex justify-center items-center rounded-xl
      cursor-pointer"
      >
        <Image src={RightCaretIcon} alt="right caret icon" />
      </div>
    </div>
  );
};

export default Switch;
