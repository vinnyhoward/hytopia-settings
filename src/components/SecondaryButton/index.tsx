import { FC } from "react";

interface SecondaryButtonProps {
  onPress?: () => void;
  buttonText?: string;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ onPress, buttonText }) => {
  return (
    <button
      className="w-[220px] h-[60px] bg-transparent border border-[rgba(241,241,241,0.1)] 
        flex flex-row justify-center items-center rounded-2xl
        hover:border-[rgba(241,241,241,1)] hover:bg-[rgba(241,241,241,0.1)] 
        transition duration-300 ease-in-out"
      onClick={onPress}
    >
      <span
        className="text-[#F1F1F1] opacity-50 font-bold text-center font-inter text-lg leading-normal
        hover:opacity-100"
      >
        {buttonText || "Hello there"}
      </span>
    </button>
  );
};

export default SecondaryButton;
