import { Link } from "react-router-dom";

export default function ThankYou() {
    return(
        <main className="h-screen w-full flex justify-center items-center bg-[url('/src/assets/images/hw-bg.webp')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col justify-center items-center bg-orange-50 px-6 py-12 shadow sm:rounded-lg sm:px-12 rounded-lg">
                <div className="text-center">
                    <h1 className="text-2xl md:text-5xl font-bold tracking-wider text-gray-900 drop-shadow-md">Thank You for Registering</h1>
                    <p className="text-base md:text-xl text-gray-900 tracking-wider mt-4 drop-shadow-md">Please check your email for verification</p>
                </div>
            </div>
        </main>
    );
}