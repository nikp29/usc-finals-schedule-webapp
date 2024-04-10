/* The Footer component is a React functional component designed to
 * represent the footer section of a web page
 */
const Footer = () => {
  return (
    <section className="justify-start self-stretch flex flex-col font-mada relative">
      <div className="bg-neutral-800 flex items-center py-9 pr-0 pl-5 gap-[250px] text-left text-white flex-wrap">
        <div className="m-0 relative text-[30px] font-semibold font-inherit relative">
          <div className="text-amber-300 top-[-50px] absolute">________</div>
          <div className="top-[30px] w-[350px] inline-block">
            Need More Information?
          </div>
        </div>
        <div className="h-[100px] w-[200] left-5 top-5 relative">
          <div className="w-[182px] h-11 left-0 top-0 relative bg-red-800">
            <div className="left-[45px] top-[12px] absolute">
              <a
                className="text-white no-underline hover:underline"
                href="https://ask.usc.edu/"
              >
                Visit AskUSC
              </a>
            </div>
          </div>
          <div className="top-[70px] absolute">Frequently asked questions</div>
        </div>
        <div className="left-[25px] h-[100px] w-[200] right-20 top-5 relative">
          <div className="w-[182px] h-11 left-0 top-0 relative bg-red-800">
            <div className="left-[43px] top-[12px] absolute">
              <a
                className="text-white no-underline hover:underline"
                href="https://arr.usc.edu/usc-glossary/"
              >
                Go to Glossary
              </a>
            </div>
          </div>
          <div className="top-[70px] absolute">Commonly searched terms</div>
        </div>
      </div>
      <div className="bg-white flex flex-row m-10">
        <div className="basis-1/3">
          <img className="w-40" src="/uscLogo.png" />
          <p className="text-[18px] text-slate-700">
            University Park Campus<br></br>
            700 Childs Way,<br></br>
            John Hubbard Hall Lobby (JHH)<br></br>
            Los Anglees, CA 90089-0912<br></br>
          </p>
          <a
            href="https://arr.usc.edu/contact/"
            className="text-[18px] text-red-800 no-underline hover:underline"
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-col basis-1/3 text-base space-y-6 mt-4 pl-20 pr-6 divide-y-2 divide-dashed divide-slate-200">
          <a
            href="https://my.usc.edu"
            className="text-black no-underline hover:underline"
          >
            myUSC
          </a>

          <a
            href="https://financialaid.usc.edu"
            className="text-black no-underline hover:underline"
          >
            Financial Aid
          </a>

          <a
            href="https://sfs.usc.edu"
            className="text-black no-underline hover:underline"
          >
            Student Financial Services
          </a>

          <a
            href="https://classes.usc.edu"
            className="text-black no-underline hover:underline"
          >
            Schedule of Classes
          </a>

          <a
            href="https://catalogue.usc.edu"
            className="text-black no-underline hover:underline"
          >
            Catalogue
          </a>
          <hr width="450"></hr>
        </div>
        <div className="basis-1/3 font-light">
          <p className="text-[14px] text-slate-700 font-[300]">
            Annual Security & Fire Safety Prospective Student Notification 2023:
          </p>
          <p className="text-[14px] text-slate-700 font-[300]">
            The University of Southern California’s Annual Security and Fire
            Safety Reports (ASR) for the past three years are available online
            at:{" "}
            <a
              href="https://dps.usc.edu/alerts/annual-report/"
              className="text-red-800 no-underline hover:underline"
            >
               https://dps.usc.edu/alerts/annual-report/ 
            </a>
            .
          </p>
          <p className="text-[14px] text-slate-700 font-[300]">
            The Annual Security and Fire Safety Report includes Clery Act crime
            and fire statistics for the preceding three years for locations
            owned and or controlled by USC, the required policy disclosure
            statements and other important safety related information.A paper
            copy of the ASR is available on request made to Department of Public
            Safety Records by calling (213) 740-6000, by email to
            DPSRecords@dps.usc.edu or in person at DPS at 3667 South McClintock
            Avenue, Los Angeles, California 90089.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
