import { Dispatch, SetStateAction, FC } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Switch from "@/components/Switch";
import InfoIcon from "@/assets/svg/info.svg";
import { GRAPHICS, ANAGLYPH, ASPECT_RATIO } from "@/constants/mockSettings";

interface DisplaySettingsProps {
  graphicsIndex: number;
  setGraphicsIndex: Dispatch<SetStateAction<number>>;
  anaglyphIndex: number;
  setAnaglyphIndex: Dispatch<SetStateAction<number>>;
  aspectRatioIndex: number;
  setAspectRatioIndex: Dispatch<SetStateAction<number>>;
}

const DisplaySettings: FC<DisplaySettingsProps> = ({
  graphicsIndex,
  setGraphicsIndex,
  anaglyphIndex,
  setAnaglyphIndex,
  aspectRatioIndex,
  setAspectRatioIndex,
}) => {
  const incrementIndex = (
    setter: Dispatch<SetStateAction<number>>,
    arrayLength: number
  ) => {
    setter((prevState) => (prevState + 1) % arrayLength);
  };

  const decrementIndex = (
    setter: Dispatch<SetStateAction<number>>,
    arrayLength: number
  ) => {
    setter((prevState) => {
      const newIndex = prevState - 1;
      return newIndex < 0 ? arrayLength - 1 : newIndex;
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center">
        <SectionTitle title="Display" />
        <div className="ml-[10px]">
          <Image src={InfoIcon} alt="Info Icon" />
        </div>
      </div>
      <div className="flex flex-col mt-[23px]">
        <div
          className="flex flex-row justify-between items-center py-[24px] px-[18px] bg-[#15161a] 
        border-[rgba(241,241,241,0.1)] border-t-[1px] border-l-[1px] border-r-[1px] 
        rounded-tl-2xl rounded-tr-2xl"
        >
          <SectionTitle title="Graphics" />
          <Switch
            setting={GRAPHICS[graphicsIndex]}
            setIncrement={() =>
              incrementIndex(setGraphicsIndex, GRAPHICS.length)
            }
            setDecrement={() =>
              decrementIndex(setGraphicsIndex, GRAPHICS.length)
            }
          />
        </div>
        <div
          className="flex flex-row justify-between items-center  py-[24px] px-[18px] bg-[#15161a] 
        border-[rgba(241,241,241,0.1)] border-l-[1px] border-r-[1px] border-t-[1px]"
        >
          <SectionTitle title="3D Anaglyph" />
          <Switch
            disableBackground={ANAGLYPH[anaglyphIndex] === "Off"}
            setting={ANAGLYPH[anaglyphIndex]}
            setIncrement={() =>
              incrementIndex(setAnaglyphIndex, ANAGLYPH.length)
            }
            setDecrement={() =>
              decrementIndex(setAnaglyphIndex, ANAGLYPH.length)
            }
          />
        </div>
        <div
          className="flex flex-row justify-between items-center  py-[24px] px-[18px] bg-[#15161a] 
        border-[rgba(241,241,241,0.1)] border-l-[1px] border-r-[1px] border-t-[1px] border-b-[1px] 
        rounded-bl-2xl rounded-br-2xl"
        >
          <SectionTitle title="Aspect Ratio" />
          <Switch
            setting={ASPECT_RATIO[aspectRatioIndex]}
            setIncrement={() =>
              incrementIndex(setAspectRatioIndex, ASPECT_RATIO.length)
            }
            setDecrement={() =>
              decrementIndex(setAspectRatioIndex, ASPECT_RATIO.length)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DisplaySettings;
