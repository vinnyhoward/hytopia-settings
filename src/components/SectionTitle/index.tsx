import { FC } from "react";

interface SectionTitleProps {
  title: string | number;
  dark?: boolean;
  styles?: string;
}
const SectionTitle: FC<SectionTitleProps> = ({
  title,
  dark = false,
  styles = "",
}) => {
  const fontColor = dark ? "text-black" : "text-white";
  return (
    <div className={`${fontColor} ${styles} font-inter text-lg font-semibold`}>
      {title}
    </div>
  );
};

export default SectionTitle;
