import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";




const Register = () => {

    const { createUser } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const name = form.get('name')
        const password = form.get('password')
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <div className="poppins max-w-6xl mx-auto mt-10">
            <Navbar></Navbar>
            <div className=" mt-10 bg-base-200 min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register your account!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full">Register</button>
                            </div>
                        </form>
                        <p className="text-center">Already Have An Account ? <Link to="/login" className="text-green-700">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;