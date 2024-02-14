const InputArea = () => {
    return (
      <section className="w-[1402px] flex flex-row items-start justify-start pt-0 pb-[26px] pr-[30px] pl-5 box-border max-w-full">
        <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[52px] max-w-full mq675:gap-[52px]">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
            <h1 className="m-0 relative text-6xl font-medium font-mada text-black text-left mq450:text-xl">
              Enter your classes to find your examination times.
            </h1>
          </div>
          <div className="w-[681px] flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[16px] max-w-full">
            <h1 className="m-0 h-[33px] relative text-6xl font-medium font-mada text-black text-left inline-block mq450:text-xl">
              Course Prefix Code:
            </h1>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq675:flex-wrap">
              <div className="w-[451px] bg-gainsboro box-border flex flex-row items-center justify-start pt-[7px] px-3 pb-[5px] max-w-full border-[1px] border-solid border-gray-300">
                <div className="h-[45px] w-[451px] relative bg-gainsboro box-border hidden max-w-full border-[1px] border-solid border-gray-300" />
                <div className="h-[33px] relative text-6xl font-medium font-mada text-black text-left inline-block z-[1] mq450:text-xl">
                  CSCI401
                </div>
              </div>
              <button className="cursor-pointer py-1.5 pr-8 pl-[29px] bg-darkred flex flex-row items-center justify-center border-[1px] border-solid border-gray-300 hover:bg-firebrick hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                <div className="h-[45px] w-[133px] relative bg-darkred box-border hidden border-[1px] border-solid border-gray-300" />
                <div className="h-[33px] relative text-6xl font-medium font-mada text-white text-left inline-block z-[1] mq450:text-xl">
                  Search
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[16px] max-w-full">
            <h1 className="m-0 h-[33px] relative text-6xl font-medium font-mada text-black text-left inline-block mq450:text-xl">
              Please select your section:
            </h1>
            <div className="self-stretch bg-white box-border flex flex-col items-start justify-start relative max-w-full border-[1px] border-solid border-silver">
              <div className="w-[1352px] bg-gray-200 overflow-x-auto flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
                <div className="w-[450px] bg-gray-100 box-border flex flex-col items-start justify-start max-w-[calc(100%_-_900px)] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 box-border max-w-full">
                    <div className="flex-1 relative text-xs leading-[130%] font-semibold font-inter text-black text-left inline-block max-w-full">
                      Section Number
                    </div>
                  </div>
                </div>
                <div className="w-[450px] bg-gray-100 box-border flex flex-col items-start justify-start max-w-[calc(100%_-_900px)] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 box-border max-w-full">
                    <div className="flex-1 relative text-xs leading-[130%] font-semibold font-inter text-black text-left inline-block max-w-full">
                      Day/Time
                    </div>
                  </div>
                </div>
                <div className="w-[450px] bg-gray-100 box-border flex flex-col items-start justify-start max-w-[calc(100%_-_900px)] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 box-border max-w-full">
                    <div className="flex-1 relative text-xs leading-[130%] font-semibold font-inter text-black text-left inline-block max-w-full">
                      Instructor
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1352px] bg-aliceblue overflow-x-auto flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
                <div className="w-[450px] bg-gray-200 box-border flex flex-col items-start justify-start max-w-[calc(100%_-_900px)] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 box-border max-w-full">
                    <div className="flex-1 relative text-xs leading-[130%] font-inter text-black text-left inline-block max-w-full">
                      193859
                    </div>
                  </div>
                </div>
                <div className="w-[450px] bg-gray-200 box-border flex flex-col items-start justify-start max-w-[calc(100%_-_900px)] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 box-border max-w-full">
                    <div className="flex-1 relative text-xs leading-[130%] font-inter text-black text-left inline-block max-w-full">
                      M/W 2:00PM
                    </div>
                  </div>
                </div>
                <div className="w-[450px] bg-gray-200 box-border flex flex-col items-start justify-start max-w-[calc(100%_-_900px)] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 box-border max-w-full">
                    <div className="flex-1 relative text-xs leading-[130%] font-inter text-black text-left inline-block max-w-full">
                      Marcus Smith
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1352px] bg-gray-200 overflow-x-auto flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
                <div className="w-[450px] bg-gray-200 box-border flex flex-col items-start justify-start max-w-[calc(100%_-_900px)] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 box-border max-w-full">
                    <div className="flex-1 relative text-xs leading-[130%] font-inter text-black text-left inline-block max-w-full">
                      937583
                    </div>
                  </div>
                </div>
                <div className="w-[450px] bg-gray-200 box-border flex flex-col items-start justify-start max-w-[calc(100%_-_900px)] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 box-border max-w-full">
                    <div className="flex-1 relative text-xs leading-[130%] font-inter text-black text-left inline-block max-w-full">
                      T/TH 2:00PM
                    </div>
                  </div>
                </div>
                <div className="w-[450px] bg-gray-200 box-border flex flex-col items-start justify-start max-w-[calc(100%_-_900px)] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 box-border max-w-full">
                    <div className="flex-1 relative text-xs leading-[130%] font-inter text-black text-left inline-block max-w-full">
                      Amy Lee
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[38px] absolute my-0 mx-[!important] right-[0px] bottom-[34px] left-[0px] box-border z-[1] border-[2px] border-solid border-lightsteelblue" />
            </div>
          </div>
          <div className="w-[901px] flex flex-col items-start justify-start gap-[16px] max-w-full">
            <h1 className="m-0 h-[33px] relative text-6xl font-medium font-mada text-black whitespace-pre-wrap text-left inline-block mq450:text-xl">{`Final Examination Time:     `}</h1>
            <div className="self-stretch rounded-8xs flex flex-col items-start justify-start">
              <div className="self-stretch bg-white box-border overflow-hidden flex flex-row flex-wrap items-start justify-start min-h-[108px] border-[1px] border-solid border-silver">
                <div className="w-[300px] bg-gray-100 box-border flex flex-col items-start justify-start min-w-[120px] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                    <div className="flex-1 relative text-xs leading-[130%] font-semibold font-inter text-black text-left">
                      Course/Section Number
                    </div>
                  </div>
                </div>
                <div className="w-[300px] bg-gray-200 box-border flex flex-col items-start justify-start min-w-[120px] ml-[-2.45px] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                    <div className="flex-1 relative text-xs leading-[130%] font-medium font-inter text-black text-left">
                      CSCI401/193859
                    </div>
                  </div>
                </div>
                <div className="w-[300px] bg-gray-100 box-border flex flex-col items-start justify-start min-w-[120px] ml-[-2.45px] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                    <div className="flex-1 relative text-xs leading-[130%] font-semibold font-inter text-black text-left">
                      Date
                    </div>
                  </div>
                </div>
                <div className="w-[300px] bg-gray-200 box-border flex flex-col items-start justify-start min-w-[120px] ml-[-2.45px] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border font-inter font-medium text-xs text-black min-w-[180px]"
                    placeholder="Monday, May 6"
                    type="text"
                  />
                </div>
                <div className="w-[300px] bg-gray-100 box-border flex flex-col items-start justify-start min-w-[120px] ml-[-2.45px] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                    <div className="flex-1 relative text-xs leading-[130%] font-semibold font-inter text-black text-left">
                      Time
                    </div>
                  </div>
                </div>
                <div className="w-[300px] bg-gray-200 box-border flex flex-col items-start justify-start min-w-[120px] ml-[-2.45px] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                    <div className="flex-1 relative text-xs leading-[130%] font-medium font-inter text-black text-left">
                      11AM - 1PM
                    </div>
                  </div>
                </div>
                <div className="w-[300px] bg-gray-200 box-border flex flex-col items-start justify-start min-w-[120px] ml-[-2.45px] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-3 box-border font-inter font-medium text-xs text-black min-w-[180px]"
                    placeholder="WRIT340/174967"
                    type="text"
                  />
                </div>
                <div className="w-[300px] bg-gray-200 box-border flex flex-col items-start justify-start min-w-[120px] ml-[-2.45px] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                    <div className="flex-1 relative text-xs leading-[130%] font-medium font-inter text-black text-left">
                      Tuesday, May 7
                    </div>
                  </div>
                </div>
                <div className="w-[300px] bg-gray-200 box-border flex flex-col items-start justify-start min-w-[120px] ml-[-2.45px] border-t-[1px] border-solid border-silver border-l-[1px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                    <div className="flex-1 relative text-xs leading-[130%] font-medium font-inter text-black text-left">
                      2PM - 4PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-1.5 pr-[27px] pl-7 bg-darkred flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-gray-300 hover:bg-firebrick hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
            <div className="h-[45px] w-64 relative bg-darkred box-border hidden border-[1px] border-solid border-gray-300" />
            <div className="h-[33px] relative text-6xl font-medium font-mada text-white text-left inline-block z-[1]">
              Export to Calendar
            </div>
          </button>
        </form>
      </section>
    );
  };
  
export default InputArea;
  