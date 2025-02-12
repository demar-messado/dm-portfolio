import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={`flex items-center gap-3 right-2 inset-2 ring-zinc-50/10 rounded-2xl p-3
        hover:bg-zinc-800 transition-colors group ${classes}`}>      
      <figure className="bg-zinc-700/10 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors flex items-center justify-center">
        <img src={imgSrc} alt={label} width={32} height={32} />
      </figure>
      <div className="">
        <h3 className="">{label}</h3>
        <p className="bg-zinc-900 text-sm">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
