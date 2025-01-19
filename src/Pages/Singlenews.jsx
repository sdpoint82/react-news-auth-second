import { useParams } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import RightSideNavbar from "./NewsNavbar/RightSideNavbar";

const Singlenews = () => {
    const { id } = useParams();

    return (
        <div className="poppins max-w-6xl mx-auto mt-10">
            <Header></Header>
            <Navbar></Navbar>
            <h2>new details</h2>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    {id}
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>

            </div>

        </div>
    );
};

export default Singlenews;