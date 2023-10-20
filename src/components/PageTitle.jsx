import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PageTitle = ({ page, name }) => {
    return (
        <div className="dark:bg-slate-800">
            <div className="c-container py-2 border-b border-b-slate-200 flex items-center justify-between dark:border-b-slate-600">
                <h4 className="text-lg font-medium text-slate-900 dark:text-white">{page}</h4>
                <div>
                    <Link to='/' className="text-violet-500">Home</Link>
                    <span className="text-slate-500 dark:text-slate-300"> / {name}</span>
                </div>
            </div>
        </div>
    );
};

PageTitle.propTypes = {
    page: PropTypes.string,
    name: PropTypes.string,
}

export default PageTitle;