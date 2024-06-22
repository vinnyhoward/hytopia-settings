import { FC } from "react";

interface PrimaryButtonProps {
  onPress?: () => void;
  buttonText?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ onPress, buttonText }) => {
  return (
    <button
      className="w-[220px] h-[60px] bg-white flex flex-row justify-center items-center rounded-2xl"
      onClick={onPress}
    >
      <span className="text-[#0E0E0E] font-bold text-[#0E0E0E] text-center font-inter text-lg leading-normal">
        {buttonText || "Click Me"}
      </span>
    </button>
  );
};

export default PrimaryButton;
