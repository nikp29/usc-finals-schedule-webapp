const Footer = () => {
    return (
        <section className="justify-start self-stretch flex flex-col font-mada relative">

            <div className="bg-neutral-800 flex items-center py-9 pr-0 pl-5 gap-[250px] text-left text-white flex-wrap">
                <div className="m-0 relative text-[30px] font-semibold font-inherit relative">
                    <div className="text-amber-300 top-[-50px] absolute">________</div>
                    <div className="top-[30px] w-[350px] inline-block">Need More Information?</div>
                </div>
                <div className="h-[100px] w-[200] left-5 top-5 relative">
                    <div className="w-[182px] h-11 left-0 top-0 relative bg-red-800">
                    <div className= "left-[45px] top-[12px] absolute"><a className="text-white no-underline hover:underline" href="https://ask.usc.edu/">Visit AskUSC</a></div>
                    </div>
                    <div className= "top-[70px] absolute">Frequently asked questions</div>
                    
                </div>
                <div className="left-[25px] h-[100px] w-[200] right-20 top-5 relative">
                    <div className="w-[182px] h-11 left-0 top-0 relative bg-red-800">
                    <div className= "left-[43px] top-[12px] absolute"><a className="text-white no-underline hover:underline" href="https://arr.usc.edu/usc-glossary/">Go to Glossary</a></div>
                    </div>
                    <div className= "top-[70px] absolute">Commonly searched terms</div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
