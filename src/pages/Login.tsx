import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase/auth";

import ghost from '../assets/images/ghost.png'

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const handleLogIn = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) {
                throw error
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false)
            navigate('/dashboard')
        }
    }

    return (
        <div className="h-screen bg-orange-50">
            <div className="flex min-h-full flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                alt="floating image of a ghost"
                                src={ghost}
                                className="mx-auto w-auto bounce"
                            />
                            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-wide text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-600 tracking-wide">
                                Don't have an Account?{" "}
                                <Link
                                    to='/signup'
                                    className="font-semibold text-orange-400 hover:text-orange-300"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>

                        <div className="mt-10">
                            <div>
                                <form
                                    onSubmit={handleLogIn}
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
                                                onChange={(e) => setEmail(e.target.value)}
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
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                autoComplete="current-password"
                                                className="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="text-sm leading-6">
                                            <Link
                                                to='/resetpassword'
                                                className="font-semibold text-orange-400 hover:text-orange-300"
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                        >
                                            {loading ? 'Signing In...' : 'Sign In'}
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
