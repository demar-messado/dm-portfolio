import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, desc, classes }) => {
  return (
    
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset bg-zinc-50/5 transition-colors" + classes}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <img src={imgSrc} alt={title} />
          <p className="py-3">{desc}</p>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg" key={key}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.prototype = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
