import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./Header";
import Navbar from "./Navbar";
import LeftSideNavbar from "./NewsNavbar/LeftSideNavbar";
import NewsNavbar from "./NewsNavbar/NewsNavbar";
import RightSideNavbar from "./NewsNavbar/RightSideNavbar";


const Home = () => {
    const news = useLoaderData()
    return (
        <div className="poppins max-w-6xl mx-auto mt-10">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 mt-16 gap-4">
                <div className="p-4">
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className="p-4 col-span-2 ">

                    {
                        news.map(aNews => <NewsNavbar key={aNews._id} aNews={aNews}></NewsNavbar>)
                    }
                </div>
                <div className="p-4 ">
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;