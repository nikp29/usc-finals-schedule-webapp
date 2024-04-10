/* The FrameGroup component is a React functional component that
 * represents a header section within a larger user interface.
 */
const FrameGroup = () => {
  return (
    <section className="self-stretch flex flex-col items-end justify-start max-w-full text-left text-41xl text-white font-mada">
      <header className="self-stretch flex flex-row items-center justify-between py-0 pr-0 pl-5 gap-[20px] text-left text-xl text-black font-inter mq750:hidden">
        <h2 className="m-0 relative text-inherit font-bold font-inherit whitespace-nowrap">
          OFFICE OF ACADEMIC RECORDS AND REGISTRAR
        </h2>
        <img
          className="h-[87px] w-[297px] relative object-cover"
          loading="eager"
          alt=""
          src="/screen-shot-20240202-at-1111-1@2x.png"
        />
      </header>
      <div className="self-stretch h-[289px] relative max-w-full">
        <div className="absolute top-[155px] left-[0px] bg-darkred w-[1440px] flex flex-row items-center justify-start py-7 px-[39px] box-border max-w-full">
          <div className="h-[134px] w-[1440px] relative bg-darkred hidden max-w-full" />
          <h1 className="m-0 h-[78px] relative text-inherit font-semibold font-inherit inline-block z-[1] mq450:text-17xl mq750:text-29xl">
            Final Exam Finder
          </h1>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[157px] object-cover z-[1]"
          loading="eager"
          alt=""
          src="/bk01-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameGroup;
