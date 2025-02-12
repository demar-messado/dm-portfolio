import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/hexure.png',
      title: 'Insurance Technologies (Hexure)',
      desc: 'Led the front-end development of a high-traffic e-commerce platform, enhancing user experience and optimizing performance.',
      tags: ['MERN', 'Websockets', 'Redux', 'APIs Intergeration', 'Sass', 'Storybook', 'Styled-Components', 'Azure DevOps'],
    },
    {
      imgSrc: '/images/hbf.jpeg',
      title: 'Social Networking platform',
      desc:'Contributed to the development of a niche social networking platform, focusing on scalability, real-time interactions, and performance optimization.',
      tags: ['AngularJS', 'Bootstrap', 'Sass', 'Socket.io', 'NodeJS', 'NodeJS', 'Express.Js', 'Babel'],
    },
    {
      imgSrc: '/images/comm.jpg',
      title: 'Tool for global communication',
      desc:'Developed a real-time collaboration tool for global communication, focusing on performance, usability, and seamless integration with third-party services.',
      tags: ['Vue.js', 'Bootstrap', 'Sass', 'Socket.io', 'NodeJS', 'Express.Js', 'Webpack', 'Babel', 'AWS', 'Passport.js', 'Jest'],
    },
  ];

const Work = () => {
  return (
    <section className="section" id="work">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 [grid-template-columns:repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, desc}, key) => (
                    <ProjectCard
                    key= {key}
                    imgSrc= {imgSrc}
                    title= {title}
                    tags= {tags}
                    desc={desc}
                    classes= "reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work