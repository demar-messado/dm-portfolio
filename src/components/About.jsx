import Logo from "./Logo";

const aboutItems = [
  {
    label: "Project done",
    number: 25,
  },
  {
    label: "Years of experience",
    number: 7,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          Senior Full Stack Developer with over <span className="font-bold text-[rgb(54,183,241)]">7 years</span> of experience building scalable web applications. Proficient in
          front-end and back-end technologies, including React, Node.js, Angular, and Azure, with a focus on delivering
          high-quality, secure, and maintainable solutions. Committed to code quality through unit and integration tests
          using frameworks like Jest. Adept at managing teams and overseeing full project lifecycles, from design to
          deployment. Passionate about leveraging cutting-edge technologies to drive business outcomes.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <div className="ml-auto md:w-[40px] md:h-[40px] mr-5">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
