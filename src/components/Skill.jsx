import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/react.svg",
    label: "ReactJS",
    desc: "Framework",
  },
  {
    imgSrc: "/images/nextJs.png",
    label: "NextJS",
    desc: "Framework",
  },
  {
    imgSrc: "/images/angular.png",
    label: "Angular",
    desc: "Framework",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/koa.png",
    label: "Koa",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/dotnet.png",
    label: ".Net",
    desc: "Framework",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/ts.png",
    label: "TypeScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/sql.png",
    label: "SQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/jira.png",
    label: "Jira",
    desc: "Tool",
  },
  {
    imgSrc: "/images/git.png",
    label: "Git",
    desc: "Tool",
  },
  {
    imgSrc: "/images/aws.png",
    label: "AWS",
    desc: "DevOps",
  },
  {
    imgSrc: "/images/azure.png",
    label: "Azure",
    desc: "DevOps",
  },
  {
    imgSrc: "/images/socket.png",
    label: "Socket.io",
    desc: "Real-time communication",
  },
  {
    imgSrc: "/images/selenium.jpeg",
    label: "Selenium",
    desc: "Testing",
  },
  {
    imgSrc: "/images/jest.jpeg",
    label: "Jest",
    desc: "Testing",
  },
  {
    imgSrc: "/images/cypress.jpeg",
    label: "Cypress",
    desc: "Testing",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          My tech stack empowers me to craft high-performance web applications with precision and creativity.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] w-full max-w-screen-xl mx-auto">
        {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
