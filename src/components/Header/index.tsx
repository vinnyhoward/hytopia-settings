"use client";
import { FC, useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import hytopiaLogo from "@/assets/svg/hytopia.svg";
import profileIcon from "@/assets/svg/profile.svg";
import tempProfileIcon from "@/assets/png/temp_profile_icon.png";

const Header: FC = () => {
  return (
    <div className="fixed top-0 left-0 h-[102px] w-full z-50 px-[50px] py-[25px] flex justify-between items-center">
      <div className="flex flex-row justify-between items-center cursor-pointer">
        <Image priority src={hytopiaLogo} alt="Hytopia Logo" />
      </div>
      <div className="flex flex-row justify-around items-center">
        <BalanceDisplay />
        <ProfileIcon src={profileIcon} alt="Profile Icon" />
        <ProfileIcon src={tempProfileIcon} alt="Temporary Profile Icon" />
      </div>
    </div>
  );
};

interface BalanceDisplayProps {
  initialBalance?: string;
}

const BalanceDisplay: FC<BalanceDisplayProps> = ({ initialBalance = "" }) => {
  const [balance, setBalance] = useState<string>(initialBalance);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBalance = () => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setBalance("$18,391");
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    const mock = fetchBalance();
    return () => mock();
  }, []);

  return (
    <div className="rounded-md bg-[rgba(241,241,241,0.1)] hover:bg-[rgba(241,241,241,0.2)] transition duration-300 ease-in-out h-[50px] flex justify-center items-center px-[20px] mr-[10px] cursor-pointer">
      <span className="text-[#F1F1F1] font-inter text-sm font-black leading-none">
        {loading ? (
          <Skeleton
            width={50}
            height={14}
            baseColor="rgba(241, 241, 241, 0.3)"
            highlightColor="rgba(241, 241, 241, 0.1)"
          />
        ) : (
          balance
        )}
      </span>
    </div>
  );
};

interface ProfileIconProps {
  src: StaticImageData;
  alt: string;
}

const ProfileIcon: FC<ProfileIconProps> = ({ src, alt }) => {
  return (
    <div className="rounded-md bg-[rgba(241,241,241,0.1)] hover:bg-[rgba(241,241,241,0.2)] transition duration-300 ease-in-out h-[50px] flex justify-center items-center px-[20px] mr-[10px] cursor-pointer">
      <Image priority src={src} alt={alt} />
    </div>
  );
};

export default Header;
