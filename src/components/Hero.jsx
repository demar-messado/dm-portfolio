import { ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-26">
      <div className="container items-center lg:grid lg:grid-cols-2  lg:gap-10">
      <div>
      <h2 className="headline-1 mt-2 mb-6 border-b-2 border-white pb-1">
        Demar Massedo
      </h2>
      <div className="hover:scale-[1.025] transition-transform duration-200">
      <a href="mailto:demar.messado.io@gmail.com">demar.messado.io@gmail.com</a>
      </div>
      </div>
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for Work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-2 mb-6">
          Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonOutline 
            label="Scroll down"
            href="#about"
            icon="arrow_downward"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
