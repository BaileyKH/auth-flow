import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase/auth"
import Confetti from 'react-confetti'

export default function Dashboard() {

    const navigate = useNavigate();

    const [isConfettiRunning, setIsConfettiRunning] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsConfettiRunning(false);
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    const handleLogOut = async () => {
        
        try {
            const { error } = await supabase.auth.signOut();

            if (error) {
                throw error
            }
        } catch (error) {
            console.log(error)
        } finally {
            navigate("/")
        }

    }

    return(
        <div className="h-screen w-full flex justify-center items-center bg-[url('/src/assets/images/hw-bg.webp')] bg-cover bg-center bg-no-repeat">
            {isConfettiRunning && <Confetti
                colors={['#0f0f0f', '#f97316', '#4c1d95', '#65a30d']}
            />}
            <div className="flex flex-col justify-center items-center bg-orange-50 px-6 py-12 shadow sm:rounded-lg sm:px-12 rounded-lg">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider text-gray-900 drop-shadow-md">You Made it!</h1>
                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 tracking-wider mt-2 mb-8 drop-shadow-md">Welcome to the Dashboard</p>
                    <button onClick={handleLogOut} className="action-button shadow">Log Out</button>
                </div>
            </div>
        </div>
        );
}