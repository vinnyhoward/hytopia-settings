import { FC } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

interface ActionBarProps {
  handleResetDefaults: () => any;
  handleSave: () => any;
}

const ActionBar: FC<ActionBarProps> = ({ handleResetDefaults, handleSave }) => {
  return (
    <div className="fixed bottom-0 left-0 h-[102px] w-full bg-[#151616] z-50 px-[50px] py-[25px]">
      <div className="flex flex-row justify-between items-center">
        <SecondaryButton
          onPress={handleResetDefaults}
          buttonText="Restore Defaults"
        />
        <PrimaryButton onPress={handleSave} buttonText="Save Settings" />
      </div>
    </div>
  );
};

export default ActionBar;
