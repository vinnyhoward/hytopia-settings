import { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Switch from "@/components/Switch";
import Slider from "@/components/Slider";
import InfoIcon from "@/assets/svg/info.svg";
import {
  CLOUDS,
  MIP_MAP_LEVELS,
  GUI_SCALE,
  RENDER_DISTANCE,
} from "@/constants/mockSettings";

interface GraphicsSettingsProps {
  cloudsIndex: number;
  setCloudsIndex: Dispatch<SetStateAction<number>>;
  renderDistanceIndex: number;
  setRenderDistanceIndex: Dispatch<SetStateAction<number>>;
  guiScaleIndex: number;
  setGuiScaleIndex: Dispatch<SetStateAction<number>>;
  mipMapIndex: number;
  setMipMapIndex: Dispatch<SetStateAction<number>>;
}

const GraphicsSettings: FC<GraphicsSettingsProps> = ({
  cloudsIndex,
  setCloudsIndex,
  renderDistanceIndex,
  setRenderDistanceIndex,
  guiScaleIndex,
  setGuiScaleIndex,
  mipMapIndex,
  setMipMapIndex,
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

  const handleChange = (
    event: any,
    setter: Dispatch<SetStateAction<number>>
  ) => {
    setter(Number(event.target.value));
  };

  return (
    <div className="w-full]">
      <div className="flex flex-row items-center">
        <SectionTitle title="Graphics" />
        <div className="ml-[10px]">
          <Image src={InfoIcon} alt="Info Icon" />
        </div>
      </div>
      <div className="flex flex-col mt-[23px]">
        <div
          className="flex flex-row justify-between items-center bg-[#15161a] py-[24px] px-[18px] 
        border-[rgba(241,241,241,0.1)] border-t-[1px] border-l-[1px] border-r-[1px] 
        rounded-tl-2xl rounded-tr-2xl"
        >
          <SectionTitle title="Clouds" />
          <Switch
            disableBackground={CLOUDS[cloudsIndex] === "Off"}
            setting={CLOUDS[cloudsIndex]}
            setIncrement={() => incrementIndex(setCloudsIndex, CLOUDS.length)}
            setDecrement={() => decrementIndex(setCloudsIndex, CLOUDS.length)}
          />
        </div>
        <div
          className="flex flex-row justify-between items-center bg-[#15161a] py-[24px] px-[18px] 
        border-[rgba(241,241,241,0.1)] border-l-[1px] border-r-[1px] border-t-[1px]"
        >
          <SectionTitle title="Mipmap Levels" />
          <Slider
            data={MIP_MAP_LEVELS}
            currentIndex={mipMapIndex}
            handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event, setMipMapIndex)
            }
          />
        </div>
        <div
          className="flex flex-row justify-between items-center bg-[#15161a] py-[24px] px-[18px] 
        border-[rgba(241,241,241,0.1)] border-l-[1px] border-r-[1px] border-t-[1px]"
        >
          <SectionTitle title="Render Distance" />
          <Slider
            metric="Chunks"
            data={RENDER_DISTANCE}
            currentIndex={renderDistanceIndex}
            handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event, setRenderDistanceIndex)
            }
          />
        </div>
        <div
          className="flex flex-row justify-between items-center bg-[#15161a] py-[24px] px-[18px] 
        border-[rgba(241,241,241,0.1)] border-l-[1px] border-r-[1px] border-t-[1px] border-b-[1px] 
        rounded-bl-2xl rounded-br-2xl"
        >
          <SectionTitle title="GUI Scale" />
          <Switch
            setting={GUI_SCALE[guiScaleIndex]}
            setIncrement={() =>
              incrementIndex(setGuiScaleIndex, GUI_SCALE.length)
            }
            setDecrement={() =>
              decrementIndex(setGuiScaleIndex, GUI_SCALE.length)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicsSettings;
