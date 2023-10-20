import PropTypes from 'prop-types';

const TestimonialsCard = ({testimonial}) => {
    const {user, profession, profile_image_url, rating, comment, comment_time} = testimonial;
    return (
        <div className="h-52 bg-slate-100 rounded-md dark:bg-slate-600">
            <div className="p-5">
                <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={profile_image_url} alt={user} />
                    </div>
                    <div>
                        <h3 className="text-slate-900 -mb-2 dark:text-white">{user}</h3>
                        <span className="text-sm text-slate-500 mt-0 dark:text-slate-300">{profession}</span>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-sm text-slate-600 dark:text-slate-300"> -{comment.length > 100 ? comment.slice(0, 100) : comment}</p>
                </div>
                <div className="flex items-center justify-between mt-5 text-slate-900 dark:text-white">
                    <p><span>Rating:</span> {rating}</p>
                    <p>{comment_time}</p>
                </div>
            </div>
        </div>
    );
};

TestimonialsCard.propTypes = {
    testimonial: PropTypes.object,
}

export default TestimonialsCard;