import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import classPic from '../../assets/class.png'
import swimmingPic from '../../assets/swimming.png'
import playPic from '../../assets/playground.png'

const RightSideNavbar = () => {
    return (
        <div className="space-y-10">
            <div className="space-y-5">
                <h2 className="text-4xl font-bold ">Login With</h2>
                <button className="btn btn-outline btn-primary w-full"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn btn-outline btn-primary w-full"><FaGithub></FaGithub> Login with GitHub</button>

            </div>
            <div className="mt-10">
                <h2 className="text-4xl font-bold mb-5">Find Us On</h2>
                <div className="border rounded-t-lg border-black px-10 py-3
                "><Link className="flex text-center items-center m-auto"> <FaFacebook className="mr-3"></FaFacebook> FaceBook</Link>
                </div>
                <div className=" border-black border-x px-10 py-3
                "><Link className="flex text-center items-center m-auto"> <FaTwitter className="mr-3"></FaTwitter> Twitter</Link>
                </div>
                <div className="border rounded-b-lg border-black px-10 py-3
                "><Link className="flex text-center items-center m-auto"> <FaInstagram className="mr-3"></FaInstagram> Instagram</Link>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-4xl font-bold ">Q-Zone</h2>
                <div>
                    <img src={classPic} alt="" />
                    <img src={swimmingPic} alt="" />
                    <img src={playPic} alt="" />
                </div>
            </div>

        </div>
    );
};

export default RightSideNavbar;