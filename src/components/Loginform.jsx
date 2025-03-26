import "./style.css";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const passwordRef = useRef();
    const [form, setForm] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const delay = (d) => new Promise((resolve) => setTimeout(resolve, d * 1000));

    const onSubmit = async (data) => {
        await delay(2);
        validateCredentials();
    };

    const validateCredentials = () => {
        const hasNumber = /\d/.test(form.password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(form.password);
        let errorMessages = [];

        if (form.username.length <= 3) errorMessages.push("Username must be at least 4 characters.");
        if (form.password.length <= 3) errorMessages.push("Password must be at least 4 characters.");
        if (!hasNumber) errorMessages.push("Password must contain at least one number.");
        if (!hasSymbol) errorMessages.push("Password must contain at least one symbol.");

        if (errorMessages.length > 0) {
            errorMessages.forEach((msg, index) => {
                setTimeout(() => {
                    toast.error(msg, { position: "top-right", autoClose: 3000, theme: "dark" });
                }, index * 1000);
            });
            return;
        }

        console.log("Login Successful!", form);
        toast.success('Login successful! Redirecting...', {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
        });

        setTimeout(() => {
            navigate("/home");
        }, 1500);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className='form-box'>
            <ToastContainer transition={Bounce} />
            <div className="main-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='image'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
                            <defs>
                                <linearGradient id="instaTextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#FEDA77' }} />
                                    <stop offset="25%" style={{ stopColor: '#F58529' }} />
                                    <stop offset="50%" style={{ stopColor: '#DD2A7B' }} />
                                    <stop offset="75%" style={{ stopColor: '#8134AF' }} />
                                    <stop offset="100%" style={{ stopColor: '#515BD4' }} />
                                </linearGradient>
                            </defs>
                            <text x="80" y="50" fontFamily="'Brush Script MT', cursive" fontSize="30" fill="url(#instaTextGradient)" fontWeight="normal">
                                Instagram
                            </text>
                        </svg>
                    </div>
                    <div className="inps">
                        <input type="text" name="username" value={form.username} onChange={handleChange} placeholder='Phone number, username or email address' />
                        <input type="password" name="password" ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Password' />
                        <p>Forget password?</p>
                    </div>
                    <div className="errors">
                        {errors.password && <p className="red">{errors.password.message}</p>}
                        {errors.username && <div className='red'>{errors.username.message}</div>}
                    </div>
                    <div className="btns">
                        <input disabled={isSubmitting} type="submit" value="Login" />
                        <div className="line">
                            <div className="lines"></div>
                            <p>OR</p>
                            <div className="lines"></div>
                        </div>
                        <div className="meta">
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9p8c6ywcF93vYR8ixGKC7TyEbEN-Z4mfYXRS7ZKKhtRDUDRaZ" alt="" />
                        </div>
                    </div>
                    <p>Don't have an account?</p>
                    <span>Sign up</span>
                </form>
            </div>
        </div>
    );
};

export default Loginform;