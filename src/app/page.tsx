"use client";
import { useState } from "react";
import SettingsHeader from "@/components/SettingsHeader";
import DisplaySettings from "@/components/DisplaySettings";
import GraphicsSettings from "@/components/GraphicsSettings";
import InfoBanner from "@/components/InfoBanner";
import ActionBar from "@/components/ActionBar";

const Sidebar = () => (
  <div className="w-[40%] mt-[50px] ml-8">
    <InfoBanner />
  </div>
);

export default function SettingsPage() {
  const [cloudsIndex, setCloudsIndex] = useState(1);
  const [renderDistanceIndex, setRenderDistanceIndex] = useState(0);
  const [guiScaleIndex, setGuiScaleIndex] = useState(5);
  const [mipMapIndex, setMipMapIndex] = useState(0);

  const [graphicsIndex, setGraphicsIndex] = useState(1);
  const [anaglyphIndex, setAnaglyphIndex] = useState(0);
  const [aspectRatioIndex, setAspectRatioIndex] = useState(0);

  const handleResetDefaults = () => {
    setCloudsIndex(1);
    setRenderDistanceIndex(0);
    setGuiScaleIndex(5);
    setMipMapIndex(0);
    setGraphicsIndex(1);
    setAnaglyphIndex(0);
    setAspectRatioIndex(0);
  };

  const handleSave = () => {
    window.alert("Settings have been saved :)");
  };

  return (
    <div>
      <SettingsHeader />
      <div className="flex flex-row">
        <div className="flex-grow">
          <DisplaySettings
            {...{
              graphicsIndex,
              setGraphicsIndex,
              anaglyphIndex,
              setAnaglyphIndex,
              aspectRatioIndex,
              setAspectRatioIndex,
            }}
          />
          <div className="mt-6">
            <GraphicsSettings
              {...{
                cloudsIndex,
                setCloudsIndex,
                renderDistanceIndex,
                setRenderDistanceIndex,
                guiScaleIndex,
                setGuiScaleIndex,
                mipMapIndex,
                setMipMapIndex,
              }}
            />
          </div>
        </div>
        <Sidebar />
      </div>
      <ActionBar {...{ handleResetDefaults, handleSave }} />
    </div>
  );
}
