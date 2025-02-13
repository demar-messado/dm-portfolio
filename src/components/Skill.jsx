import SkillCard from "./SkillCard";

const basePath = import.meta.env.VITE_BASE_PATH;

const skillItem = [
  {
    imgSrc: `${basePath}/images/react.svg`,
    label: "ReactJS",
    desc: "Framework",
  },
  {
    imgSrc: `${basePath}/images/nextJs.png`,
    label: "NextJS",
    desc: "Framework",
  },
  {
    imgSrc: `${basePath}/images/angular.png`,
    label: "Angular",
    desc: "Framework",
  },
  {
    imgSrc: `${basePath}/images/nodejs.svg`,
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: `${basePath}/images/expressjs.svg`,
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: `${basePath}/images/koa.png`,
    label: "Koa",
    desc: "Node Framework",
  },
  {
    imgSrc: `${basePath}/images/dotnet.png`,
    label: ".Net",
    desc: "Framework",
  },
  {
    imgSrc: `${basePath}/images/javascript.svg`,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: `${basePath}/images/ts.png`,
    label: "TypeScript",
    desc: "Interaction",
  },
  {
    imgSrc: `${basePath}/images/tailwindcss.svg`,
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: `${basePath}/images/css3.svg`,
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: `${basePath}/images/figma.svg`,
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: `${basePath}/images/mongodb.svg`,
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: `${basePath}/images/sql.png`,
    label: "SQL",
    desc: "Database",
  },
  {
    imgSrc: `${basePath}/images/jira.png`,
    label: "Jira",
    desc: "Tool",
  },
  {
    imgSrc: `${basePath}/images/git.png`,
    label: "Git",
    desc: "Tool",
  },
  {
    imgSrc: `${basePath}/images/aws.png`,
    label: "AWS",
    desc: "DevOps",
  },
  {
    imgSrc: `${basePath}/images/azure.png`,
    label: "Azure",
    desc: "DevOps",
  },
  {
    imgSrc: `${basePath}/images/socket.png`,
    label: "Socket.io",
    desc: "Real-time communication",
  },
  {
    imgSrc: `${basePath}/images/selenium.jpeg`,
    label: "Selenium",
    desc: "Testing",
  },
  {
    imgSrc: `${basePath}/images/jest.jpeg`,
    label: "Jest",
    desc: "Testing",
  },
  {
    imgSrc: `${basePath}/images/cypress.jpeg`,
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
