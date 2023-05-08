import { NavLink } from "react-router-dom";
// import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {

    // const [values, setValues] = useState({
    //     password: "",
    //     showPassword: false,
    // });

    // const handleClickShowPassword = () => {
    //     setValues({ ...values, showPassword: !values.showPassword });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    // const handlePasswordChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };


    return (
        <div className=" h-screen flex justify-center  pt-[15%]  md:pt-[5%] ">
            <div>
                <div className="md:w-[20%] bg-teal-300">

                </div>
                <div>
                    {/* heading */}
                    <div className="mb-4">
                        <p className="text-3xl md:text-5xl font-sans">Login to your Account</p>
                    </div>
                    <div className="mb-4 flex justify-center gap-9 md:gap-28">
                        <GitHubIcon className="" />
                        <GoogleIcon />
                    </div>
                    {/* details */}
                    <form className="" method="post" action="login.js">
                        <div className="flex flex-col md:w-[80%] mx-auto">
                            <input className="p-3 mb-4 border border-stone-400" type="text" placeholder="Enter username or email" required />
                            <input className="p-3 mb-4 border border-stone-400" type="password" placeholder="Enter password" required />

                        </div>
                        <div className="md:w-[80%] mx-auto">
                            <button className="w-full p-3 text-lg  bg-gray-950 text-white" type="submit">Login</button>
                        </div>
                    </form>

                    <div className="flex flex-col space-y-3 mt-4 md:w-[80%] mx-auto ">
                        <p className="text-start font-semibold md:text-lg"><NavLink>Forget password?</NavLink></p>
                        <p className="text-start md:text-lg">Don't have an Account? <NavLink className="font-semibold" to='/signup'>Click here</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;