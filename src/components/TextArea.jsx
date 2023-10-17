import PropTypes from 'prop-types'

const TextArea = ({name, label, ...rest}) => {
    return (
        <div className='mb-3'>
            <label className='mb-2 block ml-1 text-c-black' htmlFor={name}>{label}</label>
            <textarea className='w-full border border-slate-200 rounded-md px-4 py-2 transition-all focus:outline-none focus:ring-1 focus:ring-violet-500 resize-none' id={name} name={name} placeholder={label} {...rest} ></textarea>
        </div>
    );
};

TextArea.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
}

export default TextArea;