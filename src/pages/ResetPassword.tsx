import { useState, FormEvent } from "react";

import { supabase } from "../supabase/auth";

export default function ResetPassword() {
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            const { error } = await supabase.auth
                .resetPasswordForEmail(email, {redirectTo: `${window.location.origin}/updatepassword`,
                })

            if (error){
                throw error
            }

            setMessage('Password reset email sent! Please check your inbox.');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setEmail('')
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-full flex justify-center items-center bg-[url('/src/assets/images/hw-bg.webp')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col justify-center items-center bg-orange-50 px-6 py-12 shadow sm:rounded-lg sm:px-12 rounded-lg">
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-wider text-gray-900 drop-shadow-md">
                        Reset Password
                    </h1>
                    <p className="text-base md:text-xl text-gray-900 tracking-wider mt-2 mb-8 drop-shadow-md">
                        Please enter your email address
                    </p>
                </div>
                <div>
                    <form
                        onSubmit={handleResetPassword}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-2 row-auto justify-center items-end space-x-4">
                            <div className="col-span-1">
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
                            <div className="col-span-1">
                                <button type="submit" disabled={loading} className="text-sm leading-6 text-white tracking-wider bg-orange-400 hover:bg-orange-300 rounded-md border-0 py-1.5 px-1.5 shadow-sm">{loading ? 'Resetting...' : 'Reset'}</button>
                                {error && <p className='text-red-600'>{error}</p>}
                                {message && <p className='text-green-600'>{message}</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
