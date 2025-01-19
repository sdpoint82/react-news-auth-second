import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex text-center items-center">
            <button className="btn btn-secondary">Latest</button>

            <Marquee className="ml-5" pauseOnHover={true}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;