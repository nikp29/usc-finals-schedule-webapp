import Head from "next/head";
import FrameGroup from "../components/frame-group";
import InputArea from "../components/input-area";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[33px] tracking-[normal] mq750:gap-[33px]">
      <FrameGroup />
      <InputArea />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/screen-shot-20240202-at-1127-1@2x.png"
      />
    </div>
  );
};

export default Desktop;
