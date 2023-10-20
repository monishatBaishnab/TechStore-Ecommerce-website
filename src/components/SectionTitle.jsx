import PropTypes from 'prop-types'

const SectionTitle = ({ name, title, description }) => {
    return (
        <div className="c-container text-center">
            <span className="text-green-500 uppercase relative">
                <span className="absolute right-0 -top-2 w-10 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-md"></span>
                {name}
            </span>
            <h3 className="text-3xl font-medium text-slate-900 my-3 dark:text-white">{title}</h3>
            <p className="text-slate-500 dark:text-slate-300">{description}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default SectionTitle;