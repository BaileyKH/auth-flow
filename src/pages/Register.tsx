import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";

import { supabase } from "../supabase/auth";

import spider from '../assets/images/spider.png'

export default function Register() {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        setError(null);

        try {

            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: 'http://localhost:5173/dashboard',
                  },
            });

            if (error) {
                throw error;
            }
            
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false)
            navigate("/thankyou")
        }
        
    }

    return(
        <div className="h-screen bg-orange-50">
            <div className="flex min-h-full flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                alt="floating image of a spide"
                                src={spider}
                                className="mx-auto w-auto bounce"
                            />
                            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-wide text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-600 tracking-wide">
                                Already have an Account?{" "}
                                <Link
                                    to='/login'
                                    className="font-semibold text-orange-400 hover:text-orange-300"
                                >
                                    Log In
                                </Link>
                            </p>
                        </div>

                        <div className="mt-10">
                            <div>
                                <form
                                    onSubmit={handleRegister}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm leading-6 text-gray-900 tracking-wider"
                                        >
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => {setEmail(e.target.value)}}
                                                required
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium leading-6 text-gray-900 tracking-wider"
                                        >
                                            Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => {setPassword(e.target.value)}}
                                                required
                                                autoComplete="current-password"
                                                className="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                        >
                                            {loading ? 'Signing up...' : 'Sign Up'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        alt=""
                        src="/src/assets/images/hw-bg.webp"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}