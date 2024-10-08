import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/auth";

export default function UpdatePassword() {

    const [newPassword, setNewPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleUpdatePassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.updateUser({ password: newPassword })

            if (error){
                throw error;
            }

            setSuccess('Your password has been updated successfully!');
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="h-screen w-full flex justify-center items-center bg-[url('/src/assets/images/hw-bg.webp')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col justify-center items-center bg-orange-50 px-6 py-12 shadow sm:rounded-lg sm:px-12 rounded-lg">
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-wider text-gray-900 drop-shadow-md">
                        Reset Password
                    </h1>
                    <p className="text-base md:text-xl text-gray-900 tracking-wider mt-2 mb-8 drop-shadow-md">
                        Please enter your new password
                    </p>
                </div>
                <div>
                    <form
                        onSubmit={handleUpdatePassword}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-2 row-auto justify-center items-end space-x-4">
                            <div className="col-span-1">
                                <label
                                    htmlFor="newPassword"
                                    className="block text-sm leading-6 text-gray-900 tracking-wider"
                                >
                                    New Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="newPassword"
                                        name="newPassword"
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <button type="submit" disabled={loading} className="text-sm leading-6 text-white tracking-wider bg-orange-400 hover:bg-orange-300 rounded-md border-0 py-1.5 px-1.5 shadow-sm">{loading ? 'Updating password...' : 'Update Password'}</button>
                                {error && <p className='text-red-600'>{error}</p>}
                                {success && <p className='text-green-600'>{success}</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}