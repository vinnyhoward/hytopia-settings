import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function ActionBar() {
  return (
    <div className="fixed bottom-0 left-0 h-[102px] w-full bg-[#151616] z-50 px-[50px] py-[25px]">
      <div className="flex flex-row justify-between items-center">
        <SecondaryButton buttonText="Restore Defaults" />
        <PrimaryButton buttonText="Save Settings" />
      </div>
    </div>
  );
}
