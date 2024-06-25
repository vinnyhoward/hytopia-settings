import { FC } from "react";

interface SliderProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentIndex: number;
  data: string[] | number[];
  metric?: string;
}

const Slider: FC<SliderProps> = ({
  currentIndex,
  handleChange,
  data,
  metric = "",
}) => {
  const labelPosition = (currentIndex / (data.length - 1)) * 100;

  return (
    <div className="relative w-[420px] h-[50px] rounded-lg">
      <span
        className="absolute pointer-events-none text-white left-[50%] 
      translate-x-[-50%] translate-y-[40%] font-inter text-lg font-semibold"
      >
        {data[currentIndex]} {metric}
      </span>
      <input
        type="range"
        id="render-distance-slider"
        name="render-distance"
        min="0"
        max={data.length - 1}
        value={currentIndex}
        onChange={handleChange}
        className="slider-thumb w-[420px] h-[50px] bg-[#000] rounded-lg appearance-none cursor-pointer "
        step="1"
      />
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 50px;
          background: #4b4b4b;
          cursor: pointer;
          border-radius: 10px;
          border: none;
          z-index: 10;
        }
        .slider-thumb::-webkit-slider-runnable-track {
          width: 100%;
          height: 50px;
          background: linear-gradient(
            to right,
            #292a26 ${labelPosition}%,
            #000 ${labelPosition}%
          );
          border-radius: 10px;
        }
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 50px;
          background: #4c4c4c;
          cursor: pointer;
          border-radius: 25px;
        }
        .slider-thumb::-moz-range-track {
          width: 100%;
          height: 50px;
          background: linear-gradient(
            to right,
            #292a26 ${labelPosition}%,
            #000 ${labelPosition}%
          );
          border-radius: 25px;
        }
      `}</style>
    </div>
  );
};

export default Slider;
