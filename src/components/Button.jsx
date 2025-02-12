import PropTypes from "prop-types";

// PRIMARY BUTTON

const ButtonPrimary = ({ href, target = "_self", label, icon, classes = "" }) => {
    const buttonClasses = `btn btn-primary ${classes}`.trim();
    if (href) {
      return (
        <a href={href} target={target} className={buttonClasses}>
          {label}
          {icon && (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          )}
        </a>
      );
    } else {
      return (
        <button className={buttonClasses}>
          {label}
          {icon && (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          )}
        </button>
      );
    }
  };
ButtonPrimary.prototype = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

// Outlined BUTTON

const ButtonOutline = ({ href, target = "_self", label, icon, classes = "" }) => {
    const buttonClasses = `btn btn-outline ${classes}`.trim();
    if (href) {
      return (
        <a href={href} target={target} className={buttonClasses}>
          {label}
          {icon && (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          )}
        </a>
      );
    } else {
      return (
        <button className={buttonClasses}>
          {label}
          {icon && (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          )}
        </button>
      );
    }
  };
  ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
  };

export { ButtonPrimary, ButtonOutline };
