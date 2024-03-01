import Head from "next/head";
import FrameGroup from "../components/frame-group";
import InputArea from "../components/input-area";
import Footer from "../components/footer";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[33px] tracking-[normal] mq750:gap-[33px]">
      <FrameGroup />
      <InputArea />
      <Footer />
    </div>
  );
};

export default Desktop;
