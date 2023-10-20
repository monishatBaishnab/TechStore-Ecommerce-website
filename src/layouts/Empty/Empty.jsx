import {MdOutlineDoNotDisturbAlt} from 'react-icons/md'

const Empty = () => {
    return (
        <div className="c-container">
            <div className='flex items-center flex-col'>
                <span className='text-8xl text-center text-slate-300 mb-5'><MdOutlineDoNotDisturbAlt /></span>
                <h3 className="text-3xl font-medium text-cyan-500 text-center">Product Not Found</h3>
                <p className="text-center text-slate-500 mt-2 dark:text-slate-300">The product you are looking for has not been added to our inventory yet.</p>
            </div>
        </div>
    );
};

export default Empty;